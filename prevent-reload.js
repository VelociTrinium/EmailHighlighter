(function () {
    'use strict';

    function hasUnsavedCompose() {
        // Look for any compose/reply editor with non-empty user text
        const editors = document.querySelectorAll(
            'div[g_editable="true"], div[role="textbox"][contenteditable="true"], .Am.Al.editable'
        );
        for (let i = 0; i < editors.length; i++) {
            const text = editors[i].textContent ? editors[i].textContent.trim() : '';
            if (text.length > 0) {
                return true;
            }
        }
        return false;
    }

    // Capture-phase beforeunload handler in the page's MAIN world
    window.addEventListener(
        'beforeunload',
        (event) => {
            if (!hasUnsavedCompose()) {
                // Halt all other beforeunload handlers so the browser prompt is suppressed
                event.stopImmediatePropagation();
                delete event.returnValue;
            }
        },
        { capture: true }
    );

    // Also guard window.onbeforeunload property if assigned directly
    let _onBeforeUnloadHandler = null;
    try {
        Object.defineProperty(window, 'onbeforeunload', {
            configurable: true,
            enumerable: true,
            get() {
                return _onBeforeUnloadHandler;
            },
            set(fn) {
                if (typeof fn === 'function') {
                    _onBeforeUnloadHandler = function (e) {
                        if (!hasUnsavedCompose()) {
                            return undefined;
                        }
                        return fn.apply(this, arguments);
                    };
                } else {
                    _onBeforeUnloadHandler = fn;
                }
            }
        });
    } catch (_) { }
})();

