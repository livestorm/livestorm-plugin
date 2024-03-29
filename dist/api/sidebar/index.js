"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.focusBuiltInPanel = exports.registerPanel = void 0;
const sendEvent_1 = require("../../io/sendEvent");
const actsAsListenableIframe_1 = require("../../io/actsAsListenableIframe");
const subscribeToEvent_1 = require("../../io/subscribeToEvent");
const simpleCallbackHandler_1 = require("../../io/simpleCallbackHandler");
function registerPanel(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const listenableIframe = yield actsAsListenableIframe_1.default('register-sidebar-panel', options);
        const id = listenableIframe.getId();
        const data = { slug: options.slug, id };
        const { minimize, onMinimize } = options;
        if (minimize && onMinimize) {
            subscribeToEvent_1.default(`minimize-sidebar-panel-${id}`, () => onMinimize());
        }
        const { onClose } = options;
        if (onClose) {
            subscribeToEvent_1.default(`close-sidebar-panel-${id}`, () => onClose());
        }
        const { onHeaderButtonClick, headerButtons } = options;
        if (onHeaderButtonClick && (headerButtons === null || headerButtons === void 0 ? void 0 : headerButtons.length) > 0) {
            subscribeToEvent_1.default(`click-sidebar-panel-header-button-${id}`, (headerButton) => onHeaderButtonClick(headerButton));
        }
        return Object.assign(Object.assign({}, listenableIframe), { remove() {
                sendEvent_1.default({
                    action: 'remove-sidebar-panel',
                    data,
                });
            },
            focus() {
                sendEvent_1.default({
                    action: 'focus-sidebar-panel',
                    data,
                });
            },
            close() {
                sendEvent_1.default({
                    action: 'close-sidebar-panel',
                    data,
                });
            },
            setNotificationCount(count) {
                sendEvent_1.default({
                    action: 'set-notification-count-sidebar-panel',
                    data: Object.assign(Object.assign({}, data), { count })
                });
            },
            clearNotificationCount() {
                sendEvent_1.default({
                    action: 'set-notification-count-sidebar-panel',
                    data: Object.assign(Object.assign({}, data), { count: 0 })
                });
            } });
    });
}
exports.registerPanel = registerPanel;
function focusBuiltInPanel(tab) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            simpleCallbackHandler_1.default({
                action: 'sidebar-focus-built-in-panel',
                data: {
                    tab,
                },
                callback: () => resolve()
            });
        });
    });
}
exports.focusBuiltInPanel = focusBuiltInPanel;
//# sourceMappingURL=index.js.map