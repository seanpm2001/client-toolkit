searchState.loadedDescShard("smithay_client_toolkit", 0, "Delegates the handling of <code>wl_registry</code>.\nDelegates the handling of <code>wl_shm</code> to some <code>Shm</code>.\nRe-exports of some crates, for convenience.\nUtilities for binding globals with <code>wl_registry</code> in …\nA helper macro for implementing <code>ProvidesRegistryState</code>.\nShell abstractions\nHandler for xdg-activation\nState for xdg-activation\nMinimal implementation of <code>RequestDataExt</code>.\nData type used for requesting activation tokens\nData attached to a token request\nActivate a surface with the provided token.\nApp_id of the application requesting the token, if …\nApp_id of the application requesting the token, if …\nBind the <code>xdg-activation</code> global\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA token was issued for a previous request with <code>data</code>.\nRequest a token for surface activation.\nRequest a token for surface activation with user data.\nSeat and serial of the window requesting the token, if …\nSeat and serial of the window requesting the token, if …\nSurface of the window requesting the token, if applicable.\nSurface of the window requesting the token, if applicable.\nThe maximum API version for WlCompositor that this object …\nA trivial wrapper around a <code>WlRegion</code>.\nAn owned <code>WlSurface</code>.\nData associated with a <code>WlSurface</code>.\nA frame callback has been completed.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new surface that initially reports the given …\nThe outputs the surface is currently inside.\nThe parent surface used for this surface.\nThe scale factor of the output with the highest scale …\nThe surface has either been moved into or out of an output …\nThe surface has entered an output.\nThe surface has left an output.\nThe suggest transform for the surface.\nThe surface has either been moved into or out of an output …\nIf the <code>calloop</code> cargo feature is enabled, this can be used …\nIf the <code>calloop</code> cargo feature is enabled, this can be used …\ncreates a data source for copy paste\ncreates a data source for drag and drop\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\ncreate a new data device for a given seat\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nHandler trait for DataDevice events.\nGet the active dnd offer if it exists.\nDrop performed. After the next data offer action event, …\nThe data device pointer has entered a surface at the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe drag and drop pointer has left the surface and the …\nDrag and Drop motion.\nGet the seat associated with this data device.\nAdvertises a new selection.\nGet the active selection offer if it exists.\nUnset the selection of the provided data device as a …\nAn error that may occur when working with data offers.\nHandler trait for DataOffer events.\nAccept the given mime type, or None to reject the offer. …\nDestroy the data offer.\nwhether or not the drag has been dropped\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nRetrieve a reference to the inner wl_data_offer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nwhether or not the drag has left\nRequest to receive the data of a given mime type.\nReceive data with the given mime type. This request may …\nReceive data to the write end of a raw file descriptor. If …\nCalled to advertise the action selected by the compositor …\nthe compositor selected drag action\nthe serial for this data offer’s enter event\nSet the accepted and preferred drag and drop actions. This …\nCalled to advertise the available DnD Actions as set by …\nthe advertised drag actions\nthe surface that this DnD is active on\nthe timestamp a motion event was received in millisecond …\nInspect the mime types available on the given offer.\nInspect the mime types available on the given offer.\nInspect the mime types available on the given offer.\nthe x position on the surface\nthe y position on this surface\nHandler trait for DataSource events.\nThis may be called multiple times, once for each accepted …\nAn action was selected by the compositor.\nThe data source is no longer valid Cleanup &amp; destroy this …\nA drop was performed. The data source will be used and …\nThe drag and drop finished. The data source may be …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nRetrieve a reference to the inner wl_data_source.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe client has requested the data for this source to be …\nSet the actions that this drag source supports. This can …\nSet the selection of the provided data device as a …\nStart a normal drag and drop operation. This can be used …\nStart an internal drag and drop operation. This will pass …\nDescription of supported and preferred dmabuf formats\nA preference tranche of dmabuf formats\nA single dmabuf format/modifier pair\nBuilder for a dmabuf backed buffer\nA handler for <code>zwp_linux_dmabuf_v1::ZwpLinuxDmabufV1</code>\nAdd a plane\nCreate buffer.\nCreate buffer immediately.\nCreate a params object for constructing a buffer\n<code>wl_buffer</code> associated with <code>params</code> has been created …\n<code>dev_t</code> value for preferred target device. May be scan-out or\nServer has sent dmabuf feedback information. This may be …\nFailed to create <code>wl_buffer</code> for <code>params</code>.\nFlags for tranche\nFourcc format\nFormat/modifier pairs\nIndices of formats in the format table\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet default dmabuf feedback. Requires version <code>4</code>.\nGet default dmabuf feedback for given surface. Requires …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n<code>dev_t</code> value for main device. Buffers must be importable …\nModifier, or <code>DRM_FORMAT_MOD_INVALID</code> for implict modifier\nOnly populated in version <code>&lt;4</code>\nBind <code>zwp_linux_dmabuf_v1</code> global version 3 or 4, if it …\nCompositor has released a <code>wl_buffer</code> created through …\nTranches in descending order of preference\nSupported protocol version, if any\nAn error that may occur when creating objects using a …\nA compositor global was available, but did not support the …\nA compositor global was not available\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nInformation about a toplevel.\nHandler trait for foreign toplevel list protocol.\nApp id\nReturns the argument unchanged.\nReturns the argument unchanged.\nIdentifier to check if two toplevel handles refer to same …\nReturns information about a toplevel.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA new toplevel has been opened.\nTitle\nA toplevel has closed.\nReturns list of toplevels.\nAn existing toplevel has changed.\nA struct used as the UserData field for globals bound by …\nA trait implemented by types that provide access to …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSimplified event handler for <code>wl_output::WlOutput</code>. See …\nInformation about an output.\nA handler for delegating <code>wl_output::WlOutput</code>.\nWhether this is the current mode for this output.\nThe description of this output as advertised by the server\nNumber of pixels of this mode in format <code>(width, height)</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe id of the output.\nReturns information about an output.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLocation of the top-left corner of this output in …\nLogical position in global compositor space\nLogical size in global compositor space\nThe make name of this output as advertised by the server.\nThe model name of this output as advertised by the server.\nPossible modes for an output.\nThe name of the this output as advertised by the surface.\nA new output has been advertised.\nAn output is no longer advertised.\nReturns an iterator over all outputs.\nPhysical dimensions of this output, in millimeters.\nWhether this is the preferred mode for this output.\nRefresh rate for this mode.\nGet the output scale factor.\nThe scaling factor of this output\nThe subpixel layout for this output.\nGet the output transform.\nThe current transformation applied to this output\nAn existing output has changed.\nAccess the underlying <code>OutputInfo</code>.\nBind <code>wp_presentation</code> global, if it exists\nContent update not displayed\nRequest feedback for current submission to surface.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nContent update displayed to user at indicated time\nCreate a primary selection source.\nReturns the argument unchanged.\nGet the primary selection data device for the given seat.\nCalls <code>U::from(self)</code>.\nThe underlying wayland object.\nThe user data associated with the …\nGet the underlying data.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe seat used to create this primary selection device.\nThe new selection is received.\nThe active selection offer.\nRemove the currently active selection.\nWrapper around the <code>ZwpPrimarySelectionOfferV1</code>.\nThe data associated with the <code>ZwpPrimarySelectionOfferV1</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRequest to receive the data of a given mime type.\nRequest to receive the data of a given mime type, writen …\nInspect the mime types available on the given offer.\nWrapper around the <code>ZwpPrimarySelectionSourceV1</code>.\nHandler trait for <code>PrimarySelectionSource</code> events.\nThe data source is no longer valid Cleanup &amp; destroy this …\nReturns the argument unchanged.\nThe underlying wayland object.\nCalls <code>U::from(self)</code>.\nThe client has requested the data for this source to be …\nSet the selection on the given <code>PrimarySelectionDevice</code>.\nThe cached global.\nA helper for storing a bound global.\nThe requested global was not present after a complete …\nTrait which asserts a data type may provide a mutable …\nA trait implemented by modular parts of a smithay’s …\nState object associated with the registry handling for …\nBinds all globals with a given interface.\nBinds a global, returning a new object associated with the …\nBinds a global, returning a new object associated with the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns an iterator over all globals.\nReturns an iterator over all globals implementing the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new registry handle.\nCalled when a new global has been advertised by the …\nReturns a mutable reference to the registry state.\nCalled when a global has been destroyed by the compositor.\nCalled when a new global has been advertised by the …\nCalled when a global has been destroyed by the compositor.\nThe seat is dead.\nDescription of a seat.\nThe capability is not supported.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a keyboard from a seat.\nCreates a keyboard from a seat.\nCreates a keyboard from a seat.\nCreates a keyboard from a seat.\nCreates a pointer from a seat.\nCreates a pointer from a seat.\nCreates a pointer from a seat with the provided theme.\nCreates a pointer from a seat with the provided theme and …\nCreates a touch handle from a seat.\nCreates a touch handle from a seat.\nDoes the seat support a keyboard.\nDoes the seat support a pointer.\nDoes the seat support touch input.\nReturns information about a seat.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe name of the seat.\nA new capability is available on the seat.\nA new seat has been created.\nA capability has been removed from the seat.\nA seat has been removed.\nReturns an iterator over all the seats.\nKeys should not be repeated.\nThe specified keymap (RMLVO) is not valid.\nThe keyboard code, often corresponding to a physical key.\nData associated with a key press or release event.\nError when creating a keyboard.\nHandler trait for keyboard input.\nWrapper around a libxkbcommon keymap\nThe keyboard symbol, often corresponding to a character.\nThe state of keyboard modifiers\nThe “empty” keyboard symbol.\nThe RMLVO description of a keymap\nKeys will be repeated at the specified rate and delay.\nThe rate at which a pressed key is repeated.\nSeat error.\nThe “alt” key\nGet keymap as string in text format. The keymap should …\nThe “Caps lock” key\nThe “control” key\nThe keyboard has entered a surface.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a <code>Keysym</code> from the given <code>char</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTell whether a keysym is a cursor key.\nTell whether a keysym is a function key.\nTell whether a keysym is a keypad key.\nTell whether a key is a miscellaneous function key.\nTell whether a key is a modifier key.\nTell whether a keysym is a PF key.\nTell whether a keysym is a private keypad key.\nTranslate a keyboard symbol to its approximate character.\nThe interpreted symbol of the key.\nA comma separated list of layouts (languages) to include …\nThe keyboard has left a surface.\nThe “logo” key\nThe keyboard model by which to interpret keycodes and LEDs\nGet a string corresponding to the name of this keyboard …\nCreate a new <code>KeyCode</code> from a raw keyboard code.\nCreate a new <code>Keysym</code> from a raw keyboard symbol.\nThe “Num lock” key\nA comma separated list of options, through which the user …\nA key has been pressed on the keyboard.\nGet the raw keyboard code.\nGet the raw keyboard symbol.\nThe raw value of the key.\nA key has been released.\nThe rules file to use\nThe “shift” key\nTime at which the keypress occurred.\nKeyboard keymap has been updated.\nKeyboard modifiers have been updated.\nThe keyboard has updated the rate and delay between …\nUTF-8 interpretation of the entered text.\nA comma separated list of variants, one per layout, which …\nDelay (in milliseconds) between a key press and the start …\nThe number of repetitions per second that should occur.\nIndicates an alias of/shortcut to something is to be …\nIndicates that the something can be scrolled in any …\nDescribes a scroll along one axis\nSee also <code>BTN_SIDE</code>.\nThe fifth non-scroll button, which is often used as “…\nSee also <code>BTN_EXTRA</code>.\nThe fourth non-scroll button, which is often used as “…\nIndicates that a cell or set of cells may be selected. …\nIndicates that the item/column can be resized …\nA context menu is available for the object under the …\nIndicates something is to be copied. Often rendered as an …\nA simple crosshair (e.g., short line segments resembling a …\nDescribes the appearance of the (usually mouse) cursor …\nAn error which could be returned when parsing <code>CursorIcon</code>.\nThe requested cursor was not found.\nThe platform-dependent default cursor. Often rendered as …\nThe east border to be moved.\nThe east and west borders to be moved.\nA global error occurred.\nIndicates that something can be grabbed (dragged to be …\nIndicates that something is being grabbed (dragged to be …\nHelp is available for the object under the cursor. Often …\nAn invalid ObjectId was used.\nThere has been no enter event yet for the pointer.\nIndicates something is to be moved.\nThe north border to be moved.\nUse this specific theme with the given base size.\nThe north-east corner to be moved.\nThe north-east and south-west corners to be moved.\nIndicates that the dragged item cannot be dropped at the …\nIndicates that the requested action will not be carried …\nThe south and north borders to be moved.\nThe north-west corner to be moved.\nThe north-west and south-east corners to be moved.\nThe cursor is a pointer that indicates a link. Often …\nA single pointer event.\nAn error indicating that the cursor was not found.\nA progress indicator. The program is performing some …\nIndicates that the item/row can be resized vertically. …\nThe south border to be moved.\nThe south-east corner to be moved.\nThe south-west corner to be moved.\nUse the system provided theme\nIndicates text that may be selected. Often rendered as an …\nSpecifies which cursor theme should be used by the theme …\nPointer themeing\nIndicates vertical-text that may be selected. Often …\nThe west border to be moved.\nIndicates that the program is busy and the user should …\nIndicates that something can be zoomed in. Often rendered …\nIndicates that something can be zoomed in. Often rendered …\nThe scroll measured in pixels.\nA list of alternative names for the cursor icon as …\nThe scroll measured in steps.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nParse a string slice into <code>CursorIcon</code>.\nHide the cursor by providing empty surface for it.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if there was no movement along this axis.\nSerial from the latest button <code>PointerEventKind::Press</code> and …\nSerial from the latest <code>PointerEventKind::Enter</code> event.\nThe name of the cursor icon as defined in w3c standard.\nThe <code>WlPointer</code> associated with this <code>ThemedPointer</code>.\nOne or more pointer events are available.\nThe seat associated with this pointer.\nSet the cursor to the given <code>CursorIcon</code>.\nThe scroll was stopped.\nThe associated <code>WlSurface</code> with this <code>ThemedPointer</code>.\nName of the cursor theme.\nBase size of the cursor names.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nBind <code>zwp_pointer_constraints_v1</code> global, if it exists\nRequest that the compositor confine the pointer to a region\nPointer confinement activated by compositor\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nRequest that the compositor lock the pointer in place\nPointer lock activated by compositor\nPointer confinement deactivated by compositor\nPointer lock deactivated by compositor\nBind <code>zwp_relative_pointer_manager_v1</code> global, if it exists\n(x, y) motion vector\nUnaccelerated (x, y) motion vector\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTimestamp in microseconds\nCancel active touch sequence.\nNew touch point.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSerial from the latest touch down event.\nTouch point motion.\nCreate the new touch data associated with the given seat.\nTouch point shape orientation.\nGet the associated seat from the data.\nTouch point shape change.\nEnd of touch sequence.\nA session lock\nHandler trait for session lock protocol.\nA handler for …\nCompositor has requested size for surface.\nSession lock is not active and should be destroyed.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe session lock is active, and the client may create lock …\nAn unsupported operation, often due to the version of the …\nFunctionality shared by all <code>wl_surface::WlSurface</code> backed …\nCommits pending surface state.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThe underlying <code>WlSurface</code>.\nCross desktop group (XDG) shell\nSpecifies which edges and corners a layer should be placed …\nThe bottom edge of the anchor rectangle.\nRequest exclusive keyboard focus if the layer is above …\nThe left edge of the anchor rectangle.\nThe z-depth of a layer.\nHandler for operations on a <code>LayerSurface</code>\nA layer surface configure.\nNo keyboard focus is possible.\nThe compositor should focus and unfocus this surface by …\nThe right edge of the anchor rectangle.\nTop edge of the anchor rectangle.\nError when converting a <code>zwlr_layer_shell_v1::Layer</code> to a …\nGet a flags value with all known bits set.\nBinds the wlr layer shell global, <code>zwlr_layer_shell_v1</code>.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGet the underlying bits value.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe layer surface has been closed.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nApply a suggested surface change.\nWhether all set bits in a source flags value are also set …\nThe intersection of a source flags value with the …\nGet a flags value with all bits unset.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from a bits value.\nConvert from a bits value exactly.\nConvert from a bits value, unsetting any unknown bits.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nGet a flags value with the bits of a flag with the given …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nWhether any set bits in a source flags value are also set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether all known bits in this flags value are set.\nWhether all bits in this flags value are unset.\nYield a set of contained flags values.\nYield a set of contained named flags values.\nThe compositor suggested new size of the layer in …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe intersection of a source flags value with the …\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe maximum API version for XdgWmBase that this object …\nA trivial wrapper for an <code>xdg_positioner::XdgPositioner</code>.\nThe xdg shell globals.\nA surface role for functionality common in desktop-like …\nBinds the xdg shell global, <code>xdg_wm_base</code>.\nCreates a new, unmapped window.\nThe default fallback frame which is intended to show some …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates an <code>XdgShellSurface</code>.\nXDG shell windows.\nThe underlying <code>XdgSurface</code>.\nThe default ugly frame.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nInitial configure for this popup\nThe configure is due to an xdg_positioner with …\nThe configure is due to a reposition request with this …\nThe popup has been configured.\nThe popup was dismissed by the compositor and should be …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a new popup from an existing surface.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new popup.\nGet a new handle to the Popup\n(x,y) relative to parent surface window geometry\nThe window should draw client side decorations.\nThe window should always draw it’s own client side …\nDecoration mode of a window.\nThe window should use server side decorations or draw any …\nThe window should request client side decorations.\nThe window should request server side decorations.\nThe server will draw window decorations.\nThe window should use the decoration mode the server asks …\nA window configure.\nDecorations a window is created with.\nHandler for toplevel operations on a <code>Window</code>.\nThe capabilities supported by the compositor.\nApply a suggested surface change.\nThe compositor set decoration mode of the window.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIs <code>WindowState::ACTIVATED</code> state is set.\nIs <code>WindowState::FULLSCREEN</code> state is set.\nIs <code>WindowState::MAXIMIZED</code> state is set.\nIs <code>WindowState::RESIZING</code> state is set.\nIs <code>WindowState::TILED</code> state is set.\nIs <code>WindowState::TILED_BOTTOM</code> state is set.\nIs <code>WindowState::TILED_LEFT</code> state is set.\nIs <code>WindowState::TILED_RIGHT</code> state is set.\nIs <code>WindowState::TILED_TOP</code> state is set.\nThe compositor suggested new size of the window in window …\nRequest to close a window.\nRequests the window should use the specified decoration …\nProtocol errors\nThe current state of the window.\nCompositor suggested maximum bounds for a window.\nReturns the underlying xdg toplevel wrapped by this window.\nError while allocating the shared memory.\nAn error that may occur when creating a pool.\nThe wl_shm global is not bound.\nReturns the formats supported in memory pools.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA pool implementation which automatically manage buffers.\nA raw shared memory pool handler.\nA pool implementation based on buffer slots\nThis pool manages buffers associated with keys. Only one …\nReturns the buffer associated with the given key and its …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nRetreives the buffer associated with the given key.\nInsert a buffer into the pool.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRemoves the buffer with the given key from the pool and …\nResizes the memory pool, notifying the server the pool has …\nA raw handler for file backed shared memory pools.\nCreate a new buffer to this pool.\nCreate a new buffer to this pool.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the size of the mempool\nReturns a reference to the underlying shared memory file …\nReturns the pool object used to communicate with the …\nResizes the memory pool, notifying the server the pool has …\nBuffer was already active\nA wrapper around a <code>wl_buffer::WlBuffer</code> which has been …\nA helper trait for SlotPool::canvas.\nSlot creation error.\nPool mismatch.\nA chunk of memory allocated from a SlotPool\nSlot size mismatch\nManually mark a buffer as active.\nAttach a buffer to a surface.\nGet the bytes corresponding to a given slot or buffer if …\nGet the bytes corresponding to a given slot if drawing to …\nGet the bytes corresponding to this buffer if drawing is …\nCreate a new buffer in a new slot.\nCreate a new buffer corresponding to a slot.\nManually mark a buffer as inactive.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturn true if there are buffers referencing this slot …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the size, in bytes, of this pool.\nReturns the size, in bytes, of this slot.\nCreate a new slot with the given size in bytes.\nGet the bytes corresponding to a given slot.\nResizes the memory pool, notifying the server the pool has …\nGet the slot corresponding to this buffer.\nGet the inner buffer.\nThe data assoctiated with the subsurface.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the surface used when creating the given subsurface.")