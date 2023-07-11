(function() {var implementors = {
"smithay_client_toolkit":[["impl&lt;D, U&gt; Dispatch&lt;WlPointer, U, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/seat/struct.SeatState.html\" title=\"struct smithay_client_toolkit::seat::SeatState\">SeatState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;WlPointer, U&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/seat/pointer/trait.PointerHandler.html\" title=\"trait smithay_client_toolkit::seat::pointer::PointerHandler\">PointerHandler</a>,\n    U: <a class=\"trait\" href=\"smithay_client_toolkit/seat/pointer/trait.PointerDataExt.html\" title=\"trait smithay_client_toolkit::seat::pointer::PointerDataExt\">PointerDataExt</a>,</span>"],["impl&lt;D, U&gt; Dispatch&lt;WlDataSource, U, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/data_device_manager/struct.DataDeviceManagerState.html\" title=\"struct smithay_client_toolkit::data_device_manager::DataDeviceManagerState\">DataDeviceManagerState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;WlDataSource, U&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/data_device_manager/data_source/trait.DataSourceHandler.html\" title=\"trait smithay_client_toolkit::data_device_manager::data_source::DataSourceHandler\">DataSourceHandler</a>,\n    U: <a class=\"trait\" href=\"smithay_client_toolkit/data_device_manager/data_source/trait.DataSourceDataExt.html\" title=\"trait smithay_client_toolkit::data_device_manager::data_source::DataSourceDataExt\">DataSourceDataExt</a>,</span>"],["impl&lt;D, U&gt; Dispatch&lt;WlKeyboard, U, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/seat/struct.SeatState.html\" title=\"struct smithay_client_toolkit::seat::SeatState\">SeatState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;WlKeyboard, U&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/seat/keyboard/trait.KeyboardHandler.html\" title=\"trait smithay_client_toolkit::seat::keyboard::KeyboardHandler\">KeyboardHandler</a>,\n    U: <a class=\"trait\" href=\"smithay_client_toolkit/seat/keyboard/trait.KeyboardDataExt.html\" title=\"trait smithay_client_toolkit::seat::keyboard::KeyboardDataExt\">KeyboardDataExt</a>,</span>"],["impl&lt;D&gt; Dispatch&lt;WlSeat, <a class=\"struct\" href=\"smithay_client_toolkit/seat/struct.SeatData.html\" title=\"struct smithay_client_toolkit::seat::SeatData\">SeatData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/seat/struct.SeatState.html\" title=\"struct smithay_client_toolkit::seat::SeatState\">SeatState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;WlSeat, <a class=\"struct\" href=\"smithay_client_toolkit/seat/struct.SeatData.html\" title=\"struct smithay_client_toolkit::seat::SeatData\">SeatData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/seat/trait.SeatHandler.html\" title=\"trait smithay_client_toolkit::seat::SeatHandler\">SeatHandler</a>,</span>"],["impl&lt;D&gt; Dispatch&lt;XdgSurface, <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/window/struct.WindowData.html\" title=\"struct smithay_client_toolkit::shell::xdg::window::WindowData\">WindowData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/struct.XdgShell.html\" title=\"struct smithay_client_toolkit::shell::xdg::XdgShell\">XdgShell</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;XdgSurface, <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/window/struct.WindowData.html\" title=\"struct smithay_client_toolkit::shell::xdg::window::WindowData\">WindowData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/shell/xdg/window/trait.WindowHandler.html\" title=\"trait smithay_client_toolkit::shell::xdg::window::WindowHandler\">WindowHandler</a>,</span>"],["impl&lt;State&gt; Dispatch&lt;ZwpPrimarySelectionDeviceV1, <a class=\"struct\" href=\"smithay_client_toolkit/primary_selection/device/struct.PrimarySelectionDeviceData.html\" title=\"struct smithay_client_toolkit::primary_selection::device::PrimarySelectionDeviceData\">PrimarySelectionDeviceData</a>, State&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/primary_selection/struct.PrimarySelectionManagerState.html\" title=\"struct smithay_client_toolkit::primary_selection::PrimarySelectionManagerState\">PrimarySelectionManagerState</a><span class=\"where fmt-newline\">where\n    State: Dispatch&lt;ZwpPrimarySelectionDeviceV1, <a class=\"struct\" href=\"smithay_client_toolkit/primary_selection/device/struct.PrimarySelectionDeviceData.html\" title=\"struct smithay_client_toolkit::primary_selection::device::PrimarySelectionDeviceData\">PrimarySelectionDeviceData</a>&gt; + Dispatch&lt;ZwpPrimarySelectionOfferV1, <a class=\"struct\" href=\"smithay_client_toolkit/primary_selection/offer/struct.PrimarySelectionOfferData.html\" title=\"struct smithay_client_toolkit::primary_selection::offer::PrimarySelectionOfferData\">PrimarySelectionOfferData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/primary_selection/device/trait.PrimarySelectionDeviceHandler.html\" title=\"trait smithay_client_toolkit::primary_selection::device::PrimarySelectionDeviceHandler\">PrimarySelectionDeviceHandler</a> + 'static,</span>"],["impl&lt;D&gt; Dispatch&lt;ZxdgOutputV1, <a class=\"struct\" href=\"smithay_client_toolkit/output/struct.OutputData.html\" title=\"struct smithay_client_toolkit::output::OutputData\">OutputData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/output/struct.OutputState.html\" title=\"struct smithay_client_toolkit::output::OutputState\">OutputState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;ZxdgOutputV1, <a class=\"struct\" href=\"smithay_client_toolkit/output/struct.OutputData.html\" title=\"struct smithay_client_toolkit::output::OutputData\">OutputData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/output/trait.OutputHandler.html\" title=\"trait smithay_client_toolkit::output::OutputHandler\">OutputHandler</a>,</span>"],["impl&lt;D&gt; Dispatch&lt;WlSubcompositor, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/subcompositor/struct.SubcompositorState.html\" title=\"struct smithay_client_toolkit::subcompositor::SubcompositorState\">SubcompositorState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;WlSubcompositor, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>&gt;,</span>"],["impl&lt;D&gt; Dispatch&lt;WlOutput, <a class=\"struct\" href=\"smithay_client_toolkit/output/struct.OutputData.html\" title=\"struct smithay_client_toolkit::output::OutputData\">OutputData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/output/struct.OutputState.html\" title=\"struct smithay_client_toolkit::output::OutputState\">OutputState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;WlOutput, <a class=\"struct\" href=\"smithay_client_toolkit/output/struct.OutputData.html\" title=\"struct smithay_client_toolkit::output::OutputData\">OutputData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/output/trait.OutputHandler.html\" title=\"trait smithay_client_toolkit::output::OutputHandler\">OutputHandler</a> + 'static,</span>"],["impl&lt;D&gt; Dispatch&lt;ZwpPrimarySelectionDeviceManagerV1, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/primary_selection/struct.PrimarySelectionManagerState.html\" title=\"struct smithay_client_toolkit::primary_selection::PrimarySelectionManagerState\">PrimarySelectionManagerState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;ZwpPrimarySelectionDeviceManagerV1, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>&gt;,</span>"],["impl&lt;State&gt; Dispatch&lt;ZwpPrimarySelectionSourceV1, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>, State&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/primary_selection/struct.PrimarySelectionManagerState.html\" title=\"struct smithay_client_toolkit::primary_selection::PrimarySelectionManagerState\">PrimarySelectionManagerState</a><span class=\"where fmt-newline\">where\n    State: Dispatch&lt;ZwpPrimarySelectionSourceV1, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/primary_selection/selection/trait.PrimarySelectionSourceHandler.html\" title=\"trait smithay_client_toolkit::primary_selection::selection::PrimarySelectionSourceHandler\">PrimarySelectionSourceHandler</a>,</span>"],["impl&lt;D&gt; Dispatch&lt;ZxdgDecorationManagerV1, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/struct.XdgShell.html\" title=\"struct smithay_client_toolkit::shell::xdg::XdgShell\">XdgShell</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;ZxdgDecorationManagerV1, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/shell/xdg/window/trait.WindowHandler.html\" title=\"trait smithay_client_toolkit::shell::xdg::window::WindowHandler\">WindowHandler</a>,</span>"],["impl&lt;D&gt; Dispatch&lt;WlCallback, WlSurface, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/compositor/struct.CompositorState.html\" title=\"struct smithay_client_toolkit::compositor::CompositorState\">CompositorState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;WlCallback, WlSurface&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/compositor/trait.CompositorHandler.html\" title=\"trait smithay_client_toolkit::compositor::CompositorHandler\">CompositorHandler</a>,</span>"],["impl&lt;D, U&gt; Dispatch&lt;WlSurface, U, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/compositor/struct.CompositorState.html\" title=\"struct smithay_client_toolkit::compositor::CompositorState\">CompositorState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;WlSurface, U&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/compositor/trait.CompositorHandler.html\" title=\"trait smithay_client_toolkit::compositor::CompositorHandler\">CompositorHandler</a> + <a class=\"trait\" href=\"smithay_client_toolkit/output/trait.OutputHandler.html\" title=\"trait smithay_client_toolkit::output::OutputHandler\">OutputHandler</a> + 'static,\n    U: <a class=\"trait\" href=\"smithay_client_toolkit/compositor/trait.SurfaceDataExt.html\" title=\"trait smithay_client_toolkit::compositor::SurfaceDataExt\">SurfaceDataExt</a> + 'static,</span>"],["impl&lt;D&gt; Dispatch&lt;ZwlrLayerShellV1, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/shell/wlr_layer/struct.LayerShell.html\" title=\"struct smithay_client_toolkit::shell::wlr_layer::LayerShell\">LayerShell</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;ZwlrLayerShellV1, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/shell/wlr_layer/trait.LayerShellHandler.html\" title=\"trait smithay_client_toolkit::shell::wlr_layer::LayerShellHandler\">LayerShellHandler</a> + 'static,</span>"],["impl&lt;D&gt; Dispatch&lt;XdgPopup, <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/popup/struct.PopupData.html\" title=\"struct smithay_client_toolkit::shell::xdg::popup::PopupData\">PopupData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/popup/struct.PopupData.html\" title=\"struct smithay_client_toolkit::shell::xdg::popup::PopupData\">PopupData</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;XdgPopup, <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/popup/struct.PopupData.html\" title=\"struct smithay_client_toolkit::shell::xdg::popup::PopupData\">PopupData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/shell/xdg/popup/trait.PopupHandler.html\" title=\"trait smithay_client_toolkit::shell::xdg::popup::PopupHandler\">PopupHandler</a>,</span>"],["impl&lt;D&gt; Dispatch&lt;WlRegistry, GlobalListContents, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/registry/struct.RegistryState.html\" title=\"struct smithay_client_toolkit::registry::RegistryState\">RegistryState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;WlRegistry, GlobalListContents&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/registry/trait.ProvidesRegistryState.html\" title=\"trait smithay_client_toolkit::registry::ProvidesRegistryState\">ProvidesRegistryState</a>,</span>"],["impl&lt;D, U, V&gt; Dispatch&lt;WlDataDevice, U, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/data_device_manager/struct.DataDeviceManagerState.html\" title=\"struct smithay_client_toolkit::data_device_manager::DataDeviceManagerState\">DataDeviceManagerState</a>&lt;V&gt;<span class=\"where fmt-newline\">where\n    D: Dispatch&lt;WlDataDevice, U&gt; + Dispatch&lt;WlDataOffer, V&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/data_device_manager/data_device/trait.DataDeviceHandler.html\" title=\"trait smithay_client_toolkit::data_device_manager::data_device::DataDeviceHandler\">DataDeviceHandler</a> + <a class=\"trait\" href=\"smithay_client_toolkit/data_device_manager/data_offer/trait.DataOfferHandler.html\" title=\"trait smithay_client_toolkit::data_device_manager::data_offer::DataOfferHandler\">DataOfferHandler</a> + 'static,\n    U: <a class=\"trait\" href=\"smithay_client_toolkit/data_device_manager/data_device/trait.DataDeviceDataExt.html\" title=\"trait smithay_client_toolkit::data_device_manager::data_device::DataDeviceDataExt\">DataDeviceDataExt</a>,\n    V: <a class=\"trait\" href=\"smithay_client_toolkit/data_device_manager/data_offer/trait.DataOfferDataExt.html\" title=\"trait smithay_client_toolkit::data_device_manager::data_offer::DataOfferDataExt\">DataOfferDataExt</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"],["impl&lt;D&gt; Dispatch&lt;ZwlrLayerSurfaceV1, <a class=\"struct\" href=\"smithay_client_toolkit/shell/wlr_layer/struct.LayerSurfaceData.html\" title=\"struct smithay_client_toolkit::shell::wlr_layer::LayerSurfaceData\">LayerSurfaceData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/shell/wlr_layer/struct.LayerShell.html\" title=\"struct smithay_client_toolkit::shell::wlr_layer::LayerShell\">LayerShell</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;ZwlrLayerSurfaceV1, <a class=\"struct\" href=\"smithay_client_toolkit/shell/wlr_layer/struct.LayerSurfaceData.html\" title=\"struct smithay_client_toolkit::shell::wlr_layer::LayerSurfaceData\">LayerSurfaceData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/shell/wlr_layer/trait.LayerShellHandler.html\" title=\"trait smithay_client_toolkit::shell::wlr_layer::LayerShellHandler\">LayerShellHandler</a> + 'static,</span>"],["impl&lt;D&gt; Dispatch&lt;WlShm, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/shm/struct.Shm.html\" title=\"struct smithay_client_toolkit::shm::Shm\">Shm</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;WlShm, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/shm/trait.ShmHandler.html\" title=\"trait smithay_client_toolkit::shm::ShmHandler\">ShmHandler</a>,</span>"],["impl&lt;D, U&gt; Dispatch&lt;WlTouch, U, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/seat/struct.SeatState.html\" title=\"struct smithay_client_toolkit::seat::SeatState\">SeatState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;WlTouch, U&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/seat/touch/trait.TouchHandler.html\" title=\"trait smithay_client_toolkit::seat::touch::TouchHandler\">TouchHandler</a>,\n    U: <a class=\"trait\" href=\"smithay_client_toolkit/seat/touch/trait.TouchDataExt.html\" title=\"trait smithay_client_toolkit::seat::touch::TouchDataExt\">TouchDataExt</a>,</span>"],["impl&lt;D&gt; Dispatch&lt;ZwpPointerConstraintsV1, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/seat/pointer_constraints/struct.PointerConstraintsState.html\" title=\"struct smithay_client_toolkit::seat::pointer_constraints::PointerConstraintsState\">PointerConstraintsState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;ZwpPointerConstraintsV1, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/seat/pointer_constraints/trait.PointerConstraintsHandler.html\" title=\"trait smithay_client_toolkit::seat::pointer_constraints::PointerConstraintsHandler\">PointerConstraintsHandler</a>,</span>"],["impl&lt;State&gt; Dispatch&lt;ZwpPrimarySelectionOfferV1, <a class=\"struct\" href=\"smithay_client_toolkit/primary_selection/offer/struct.PrimarySelectionOfferData.html\" title=\"struct smithay_client_toolkit::primary_selection::offer::PrimarySelectionOfferData\">PrimarySelectionOfferData</a>, State&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/primary_selection/struct.PrimarySelectionManagerState.html\" title=\"struct smithay_client_toolkit::primary_selection::PrimarySelectionManagerState\">PrimarySelectionManagerState</a><span class=\"where fmt-newline\">where\n    State: Dispatch&lt;ZwpPrimarySelectionOfferV1, <a class=\"struct\" href=\"smithay_client_toolkit/primary_selection/offer/struct.PrimarySelectionOfferData.html\" title=\"struct smithay_client_toolkit::primary_selection::offer::PrimarySelectionOfferData\">PrimarySelectionOfferData</a>&gt;,</span>"],["impl&lt;D&gt; Dispatch&lt;XdgSurface, <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/popup/struct.PopupData.html\" title=\"struct smithay_client_toolkit::shell::xdg::popup::PopupData\">PopupData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/popup/struct.PopupData.html\" title=\"struct smithay_client_toolkit::shell::xdg::popup::PopupData\">PopupData</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;XdgSurface, <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/popup/struct.PopupData.html\" title=\"struct smithay_client_toolkit::shell::xdg::popup::PopupData\">PopupData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/shell/xdg/popup/trait.PopupHandler.html\" title=\"trait smithay_client_toolkit::shell::xdg::popup::PopupHandler\">PopupHandler</a>,</span>"],["impl&lt;D&gt; Dispatch&lt;ZxdgOutputManagerV1, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/output/struct.OutputState.html\" title=\"struct smithay_client_toolkit::output::OutputState\">OutputState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;ZxdgOutputManagerV1, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/output/trait.OutputHandler.html\" title=\"trait smithay_client_toolkit::output::OutputHandler\">OutputHandler</a>,</span>"],["impl&lt;D, U&gt; Dispatch&lt;WlDataOffer, U, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/data_device_manager/struct.DataDeviceManagerState.html\" title=\"struct smithay_client_toolkit::data_device_manager::DataDeviceManagerState\">DataDeviceManagerState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;WlDataOffer, U&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/data_device_manager/data_offer/trait.DataOfferHandler.html\" title=\"trait smithay_client_toolkit::data_device_manager::data_offer::DataOfferHandler\">DataOfferHandler</a>,\n    U: <a class=\"trait\" href=\"smithay_client_toolkit/data_device_manager/data_offer/trait.DataOfferDataExt.html\" title=\"trait smithay_client_toolkit::data_device_manager::data_offer::DataOfferDataExt\">DataOfferDataExt</a>,</span>"],["impl&lt;D&gt; Dispatch&lt;XdgWmBase, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/struct.XdgShell.html\" title=\"struct smithay_client_toolkit::shell::xdg::XdgShell\">XdgShell</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;XdgWmBase, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>&gt;,</span>"],["impl&lt;D&gt; Dispatch&lt;WlDataDeviceManager, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/data_device_manager/struct.DataDeviceManagerState.html\" title=\"struct smithay_client_toolkit::data_device_manager::DataDeviceManagerState\">DataDeviceManagerState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;WlDataDeviceManager, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>&gt;,</span>"],["impl&lt;D&gt; Dispatch&lt;ZxdgToplevelDecorationV1, <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/window/struct.WindowData.html\" title=\"struct smithay_client_toolkit::shell::xdg::window::WindowData\">WindowData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/struct.XdgShell.html\" title=\"struct smithay_client_toolkit::shell::xdg::XdgShell\">XdgShell</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;ZxdgToplevelDecorationV1, <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/window/struct.WindowData.html\" title=\"struct smithay_client_toolkit::shell::xdg::window::WindowData\">WindowData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/shell/xdg/window/trait.WindowHandler.html\" title=\"trait smithay_client_toolkit::shell::xdg::window::WindowHandler\">WindowHandler</a>,</span>"],["impl&lt;D&gt; Dispatch&lt;WlSubsurface, <a class=\"struct\" href=\"smithay_client_toolkit/subcompositor/struct.SubsurfaceData.html\" title=\"struct smithay_client_toolkit::subcompositor::SubsurfaceData\">SubsurfaceData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/subcompositor/struct.SubcompositorState.html\" title=\"struct smithay_client_toolkit::subcompositor::SubcompositorState\">SubcompositorState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;WlSubsurface, <a class=\"struct\" href=\"smithay_client_toolkit/subcompositor/struct.SubsurfaceData.html\" title=\"struct smithay_client_toolkit::subcompositor::SubsurfaceData\">SubsurfaceData</a>&gt;,</span>"],["impl&lt;D&gt; Dispatch&lt;XdgToplevel, <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/window/struct.WindowData.html\" title=\"struct smithay_client_toolkit::shell::xdg::window::WindowData\">WindowData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/struct.XdgShell.html\" title=\"struct smithay_client_toolkit::shell::xdg::XdgShell\">XdgShell</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;XdgToplevel, <a class=\"struct\" href=\"smithay_client_toolkit/shell/xdg/window/struct.WindowData.html\" title=\"struct smithay_client_toolkit::shell::xdg::window::WindowData\">WindowData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/shell/xdg/window/trait.WindowHandler.html\" title=\"trait smithay_client_toolkit::shell::xdg::window::WindowHandler\">WindowHandler</a>,</span>"],["impl&lt;D&gt; Dispatch&lt;WlCompositor, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/compositor/struct.CompositorState.html\" title=\"struct smithay_client_toolkit::compositor::CompositorState\">CompositorState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;WlCompositor, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/compositor/trait.CompositorHandler.html\" title=\"trait smithay_client_toolkit::compositor::CompositorHandler\">CompositorHandler</a>,</span>"],["impl&lt;D, I, const MAX_VERSION: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt; Dispatch&lt;I, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.unit.html\">()</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/registry/struct.SimpleGlobal.html\" title=\"struct smithay_client_toolkit::registry::SimpleGlobal\">SimpleGlobal</a>&lt;I, MAX_VERSION&gt;<span class=\"where fmt-newline\">where\n    D: Dispatch&lt;I, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.unit.html\">()</a>&gt;,\n    I: Proxy,</span>"],["impl&lt;D&gt; Dispatch&lt;ZwpRelativePointerManagerV1, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>, D&gt; for <a class=\"struct\" href=\"smithay_client_toolkit/seat/relative_pointer/struct.RelativePointerState.html\" title=\"struct smithay_client_toolkit::seat::relative_pointer::RelativePointerState\">RelativePointerState</a><span class=\"where fmt-newline\">where\n    D: Dispatch&lt;ZwpRelativePointerManagerV1, <a class=\"struct\" href=\"smithay_client_toolkit/globals/struct.GlobalData.html\" title=\"struct smithay_client_toolkit::globals::GlobalData\">GlobalData</a>&gt; + <a class=\"trait\" href=\"smithay_client_toolkit/seat/relative_pointer/trait.RelativePointerHandler.html\" title=\"trait smithay_client_toolkit::seat::relative_pointer::RelativePointerHandler\">RelativePointerHandler</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()