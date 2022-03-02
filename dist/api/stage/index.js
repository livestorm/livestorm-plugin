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
exports.Buttons = exports.registerCustomContent = void 0;
const Buttons = require("./buttons");
exports.Buttons = Buttons;
const sendEvent_1 = require("../../io/sendEvent");
const actsAsListenableIframe_1 = require("../../io/actsAsListenableIframe");
function registerCustomContent(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const listenableIframe = yield actsAsListenableIframe_1.default('stage-register-custom-content', options);
        const id = listenableIframe.getId();
        return Object.assign(Object.assign({}, listenableIframe), { hide() {
                sendEvent_1.default({
                    action: 'stage-hide-custom-content',
                    data: { id }
                });
            },
            show() {
                sendEvent_1.default({
                    action: 'stage-show-custom-content',
                    data: { id }
                });
            },
            remove() {
                sendEvent_1.default({
                    action: 'stage-remove-custom-content',
                    data: { id }
                });
            } });
    });
}
exports.registerCustomContent = registerCustomContent;
//# sourceMappingURL=index.js.map