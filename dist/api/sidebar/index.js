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
exports.registerPanel = void 0;
const sendEvent_1 = require("../../io/sendEvent");
const actsAsListenableIframe_1 = require("../../io/actsAsListenableIframe");
function registerPanel(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const listenableIframe = yield actsAsListenableIframe_1.default('register-sidebar-panel', options);
        const uuid = listenableIframe.getId();
        return Object.assign(Object.assign({}, listenableIframe), { remove() {
                sendEvent_1.default({
                    action: 'remove-sidebar-panel',
                    data: { slug: options.slug, id: uuid }
                });
            },
            focus() {
                sendEvent_1.default({
                    action: 'focus-sidebar-panel',
                    data: { slug: options.slug, id: uuid }
                });
            },
            close() {
                sendEvent_1.default({
                    action: 'close-sidebar-panel',
                    data: { slug: options.slug, id: uuid }
                });
            } });
    });
}
exports.registerPanel = registerPanel;
//# sourceMappingURL=index.js.map