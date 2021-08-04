//! Unified shell surface handling
//!
//! This module provides an abstraction unifying the various iterations of
//! the shell surface protocols (`wl_shell`, `zxdg_shell_v6` and `xdg_shell`,
//! the current standard).
//!
//! This abstraction only manages the protocol part of shell surfaces. If you're
//! looking for a more battery-included abstraction for creating windows,
//! consider the `Window` type.
use std::cell::RefCell;

use wayland_client::{
    protocol::{wl_output, wl_registry, wl_seat, wl_shell, wl_surface},
    Attached, DispatchData,
};

pub use wayland_protocols::xdg_shell::client::xdg_toplevel::State;
use wayland_protocols::{
    unstable::xdg_shell::v6::client::zxdg_shell_v6,
    xdg_shell::client::{xdg_toplevel, xdg_wm_base},
};

use crate::environment::{Environment, GlobalHandler};

mod wl;
mod xdg;
mod zxdg;

use crate::lazy_global::LazyGlobal;

/// Possible events generated by a shell surface that you need to handle
#[derive(Clone, Debug)]
pub enum Event {
    /// The state of your window has been changed
    Configure {
        /// Optional new size for your shell surface
        ///
        /// This is the new size of the contents of your shell surface
        /// as suggested by the server. You can ignore it and choose
        /// a new size if you want better control on the possible
        /// sizes of your shell surface.
        ///
        /// In all cases, these events can be generated in large batches
        /// during an interactive resize, and you should buffer them before
        /// processing them. You only need to handle the last one of a batch.
        new_size: Option<(u32, u32)>,
        /// New combination of states of your window
        ///
        /// Typically tells you if your surface is active/inactive, maximized,
        /// etc...
        states: Vec<State>,
    },
    /// A close request has been received
    ///
    /// Most likely the user has clicked on the close button of the decorations
    /// or something equivalent
    Close,
}

/// Possible supported shell protocols
pub enum Shell {
    /// The current standard `xdg_shell` protocol.
    Xdg(Attached<xdg_wm_base::XdgWmBase>),
    /// A previous iteration of the `xdg_shell` protocol.
    ///
    /// It has been replaced by the stable `xdg_shell`, and is only present here for
    /// compatibility purposes.
    Zxdg(Attached<zxdg_shell_v6::ZxdgShellV6>),
    /// The legacy `wl_shell`.
    ///
    /// It is deprecated and only present here for compatibility purposes.
    Wl(Attached<wl_shell::WlShell>),
}

impl Shell {
    /// Check if the shell in use needs you to wait for a `configure` event
    /// before you are allowed to draw.
    pub fn needs_configure(&self) -> bool {
        match self {
            Shell::Wl(_) => false,
            Shell::Xdg(_) => true,
            Shell::Zxdg(_) => true,
        }
    }
}

pub(crate) fn create_shell_surface<F>(
    shell: &Shell,
    surface: &wl_surface::WlSurface,
    callback: F,
) -> Box<dyn ShellSurface>
where
    F: FnMut(Event, DispatchData) + 'static,
{
    match *shell {
        Shell::Wl(ref shell) => Box::new(wl::Wl::create(surface, shell, callback)) as Box<_>,
        Shell::Xdg(ref shell) => Box::new(xdg::Xdg::create(surface, shell, callback)) as Box<_>,
        Shell::Zxdg(ref shell) => Box::new(zxdg::Zxdg::create(surface, shell, callback)) as Box<_>,
    }
}

/// Trait abstracting over shell surface protocols
///
/// This trait's API is designed to reflect the behavior of the current standard
/// shell surface protocol: `xdg_shell`. Compatibility implementations are
/// provided for older protocols.
pub trait ShellSurface: Send + Sync {
    /// Resizes the shell surface
    fn resize(&self, seat: &wl_seat::WlSeat, serial: u32, edges: xdg_toplevel::ResizeEdge);
    /// Moves the shell surface
    fn move_(&self, seat: &wl_seat::WlSeat, serial: u32);
    /// Set the title of the shell surface
    fn set_title(&self, title: String);
    /// Set the app id of the shell surface
    fn set_app_id(&self, app_id: String);
    /// Make fullscreen
    fn set_fullscreen(&self, output: Option<&wl_output::WlOutput>);
    /// Unset fullscreen
    fn unset_fullscreen(&self);
    /// Maximize surface
    fn set_maximized(&self);
    /// Unmaximize surface
    fn unset_maximized(&self);
    /// Minimize surface
    fn set_minimized(&self);
    /// Set geometry
    fn set_geometry(&self, x: i32, y: i32, width: i32, height: i32);
    /// Set minimum surface size
    fn set_min_size(&self, size: Option<(i32, i32)>);
    /// Set maximum surface size
    fn set_max_size(&self, size: Option<(i32, i32)>);
    /// Show window menu.
    fn show_window_menu(&self, seat: &wl_seat::WlSeat, serial: u32, x: i32, y: i32);
    /// Retrive the `XdgToplevel` proxy if the underlying shell surface
    /// uses the `xdg_shell` protocol.
    ///
    /// This allows interactions with other protocol extensions, like
    /// `xdg_decoratins` for example.
    fn get_xdg(&self) -> Option<&xdg_toplevel::XdgToplevel>;
}

struct ShellInner {
    registry: Option<Attached<wl_registry::WlRegistry>>,
    wl_shell: LazyGlobal<wl_shell::WlShell>,
    xdg_shell: LazyGlobal<xdg_wm_base::XdgWmBase>,
    zxdg_shell: LazyGlobal<zxdg_shell_v6::ZxdgShellV6>,
}

/// A handler for shells
///
/// For use with the [`environment!`](../macro.environment.html) macro. It is already
/// automatically included if you use the [`default_environment!`](../macro.default_environment.hmtl).
///
/// To use it, you need to set it as a handler for the shells you want to support (`xdg_wm_base`,
/// `zxdg_shell_v6` and/or `wl_shell`). You can then implement the
/// [`ShellHandling`](trait.ShellHandling.html) by delegating it, to get the shell-related methods on
/// [`Environment`](../environment/struct.environment.html)
///
/// ```no_run
/// # extern crate smithay_client_toolkit as sctk;
/// # use sctk::environment;
/// # use sctk::environment::Environment;
/// # use sctk::shell::*;
/// # use sctk::reexports::client::protocol::wl_shell;
/// # use sctk::reexports::protocols::xdg_shell::client::xdg_wm_base;
/// # use sctk::reexports::protocols::unstable::xdg_shell::v6::client::zxdg_shell_v6;
/// # let display = sctk::reexports::client::Display::connect_to_env().unwrap();
/// # let mut queue = display.create_event_queue();
/// # let attached_display = display.attach(queue.token());
/// struct MyEnv {
///     my_shell: ShellHandler
/// }
///
/// environment!(MyEnv,
///     singles=[
///         wl_shell::WlShell => my_shell,
///         xdg_wm_base::XdgWmBase => my_shell,
///         zxdg_shell_v6::ZxdgShellV6 => my_shell
///     ],
///     multis=[],
/// );
///
/// impl ShellHandling for MyEnv {
///     fn get_shell(&self) -> Option<Shell> {
///         // delegate the impl to the stored handler
///         self.my_shell.get_shell()
///     }
/// }
///
/// let env = Environment::new(&attached_display, &mut queue, MyEnv {
///     my_shell: ShellHandler::new()
/// });
/// ```
pub struct ShellHandler {
    inner: RefCell<ShellInner>,
}

impl ShellHandler {
    /// Create a new handler
    pub fn new() -> ShellHandler {
        ShellHandler {
            inner: RefCell::new(ShellInner {
                registry: None,
                wl_shell: LazyGlobal::Unknown,
                xdg_shell: LazyGlobal::Unknown,
                zxdg_shell: LazyGlobal::Unknown,
            }),
        }
    }
}

impl GlobalHandler<wl_shell::WlShell> for ShellHandler {
    fn created(
        &mut self,
        registry: Attached<wl_registry::WlRegistry>,
        id: u32,
        version: u32,
        _: DispatchData,
    ) {
        let mut inner = self.inner.borrow_mut();
        if inner.registry.is_none() {
            inner.registry = Some(registry);
        }
        if let LazyGlobal::Unknown = inner.wl_shell {
            inner.wl_shell = LazyGlobal::Seen { id, version };
        } else {
            log::warn!("Compositor advertised wl_shell multiple times, ignoring.")
        }
    }
    fn get(&self) -> Option<Attached<wl_shell::WlShell>> {
        let mut inner = self.inner.borrow_mut();
        match inner.wl_shell {
            LazyGlobal::Bound(ref shell) => Some(shell.clone()),
            LazyGlobal::Unknown => None,
            LazyGlobal::Seen { id, .. } => {
                // registry cannot be None if we have seen the global
                let registry = inner.registry.as_ref().unwrap();
                // only version 1 of wl_shell is supported
                let shell = registry.bind::<wl_shell::WlShell>(1, id);
                inner.wl_shell = LazyGlobal::Bound((*shell).clone());
                Some((*shell).clone())
            }
        }
    }
}

impl GlobalHandler<xdg_wm_base::XdgWmBase> for ShellHandler {
    fn created(
        &mut self,
        registry: Attached<wl_registry::WlRegistry>,
        id: u32,
        version: u32,
        _: DispatchData,
    ) {
        let mut inner = self.inner.borrow_mut();
        if inner.registry.is_none() {
            inner.registry = Some(registry);
        }
        if let LazyGlobal::Unknown = inner.xdg_shell {
            inner.xdg_shell = LazyGlobal::Seen { id, version };
        } else {
            log::warn!("Compositor advertised xdg_wm_base multiple times, ignoring.")
        }
    }
    fn get(&self) -> Option<Attached<xdg_wm_base::XdgWmBase>> {
        let mut inner = self.inner.borrow_mut();
        match inner.xdg_shell {
            LazyGlobal::Bound(ref shell) => Some(shell.clone()),
            LazyGlobal::Unknown => None,
            LazyGlobal::Seen { version, id } => {
                // registry cannot be None if we have seen the global
                let registry = inner.registry.as_ref().unwrap();
                // we currently support xdg_shell up to version 2
                let version = std::cmp::min(2, version);
                let shell = registry.bind::<xdg_wm_base::XdgWmBase>(version, id);
                shell.quick_assign(|shell, event, _| {
                    if let xdg_wm_base::Event::Ping { serial } = event {
                        shell.pong(serial);
                    }
                });
                inner.xdg_shell = LazyGlobal::Bound((*shell).clone());
                Some((*shell).clone())
            }
        }
    }
}

impl GlobalHandler<zxdg_shell_v6::ZxdgShellV6> for ShellHandler {
    fn created(
        &mut self,
        registry: Attached<wl_registry::WlRegistry>,
        id: u32,
        version: u32,
        _: DispatchData,
    ) {
        let mut inner = self.inner.borrow_mut();
        if inner.registry.is_none() {
            inner.registry = Some(registry);
        }
        if let LazyGlobal::Unknown = inner.zxdg_shell {
            inner.zxdg_shell = LazyGlobal::Seen { id, version };
        } else {
            log::warn!("Compositor advertised zxdg_shell_v6 multiple times, ignoring.")
        }
    }
    fn get(&self) -> Option<Attached<zxdg_shell_v6::ZxdgShellV6>> {
        let mut inner = self.inner.borrow_mut();
        match inner.zxdg_shell {
            LazyGlobal::Bound(ref shell) => Some(shell.clone()),
            LazyGlobal::Unknown => None,
            LazyGlobal::Seen { id, .. } => {
                // registry cannot be None if we have seen the global
                let registry = inner.registry.as_ref().unwrap();
                // only version 1 of zxdg_shell_v6 is supported
                let shell = registry.bind::<zxdg_shell_v6::ZxdgShellV6>(1, id);
                shell.quick_assign(|shell, event, _| {
                    if let zxdg_shell_v6::Event::Ping { serial } = event {
                        shell.pong(serial);
                    }
                });
                inner.zxdg_shell = LazyGlobal::Bound((*shell).clone());
                Some((*shell).clone())
            }
        }
    }
}

impl ShellHandling for ShellHandler {
    fn get_shell(&self) -> Option<Shell> {
        GlobalHandler::<xdg_wm_base::XdgWmBase>::get(self)
            .map(Shell::Xdg)
            .or_else(|| GlobalHandler::<zxdg_shell_v6::ZxdgShellV6>::get(self).map(Shell::Zxdg))
            .or_else(|| GlobalHandler::<wl_shell::WlShell>::get(self).map(Shell::Wl))
    }
}

/// A helper trait for delegating shell handling
///
/// If you don't use [`declare_default_environment!`](../macro.declare_default_environment.html) but still
/// want to use the shell helpers provided here, you need to implement this trait for your
/// [`declare_environment!`](../macro.declare_environment.html)-generated type, by delegating it to one
/// of the handlers you provided for the different shells.
pub trait ShellHandling {
    /// Get the best available shell
    fn get_shell(&self) -> Option<Shell>;
}

impl<E: ShellHandling> Environment<E> {
    /// Get the best available shell protocol
    ///
    /// Returns `None` if no shell was advertised.
    pub fn get_shell(&self) -> Option<Shell> {
        self.with_inner(|extras| extras.get_shell())
    }
    /// Create a new shell surface for this surface
    ///
    /// This helper abstracts over the `xdg_shell` protocol and its precursors (`zxdg_shell_v6`
    /// and `wl_shell`) for retro-compatibility. It'll attempt to use them in this order.
    ///
    /// You need to provide a closure that will process the events generated by the shell surface.
    ///
    /// *Panic*
    ///
    /// This function will panic if no supported shell was advertised by the compositor.
    pub fn create_shell_surface<F>(
        &self,
        surface: &wl_surface::WlSurface,
        f: F,
    ) -> Box<dyn ShellSurface>
    where
        F: FnMut(Event, DispatchData) + 'static,
    {
        let shell = self
            .get_shell()
            .expect("SCTK: trying to create a shell surface without any supported shell.");
        create_shell_surface(&shell, surface, f)
    }
}
