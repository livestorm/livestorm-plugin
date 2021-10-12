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
exports.showIframe = void 0;
const actsAsListenableIframe_1 = require("../io/actsAsListenableIframe");
const sendEvent_1 = require("../io/sendEvent");
/**
 *
 * Display a modal with custom HTML content.
 * Useful for many use cases including : forms, call to actions, information box, etc
 *
 * @example Modal.showIframe({
 *   size: 'large',
 *   template: '<p>{{ content }}</p>',
 *   variables: { content: 'hello' }
 *   onMessage: (message) => {}
 * })
 *
 * @doc https://developers.livestorm.co/docs/modal#showiframe
 *
 */
function showIframe(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const listenableIframe = yield actsAsListenableIframe_1.default('modal-show-iframe', { template: data.template, variables: data.variables, onMessage: data.onMessage }, { size: data.size });
        return Object.assign(Object.assign({}, listenableIframe), { close: () => {
                sendEvent_1.default({
                    action: `close-modal-${listenableIframe.getId()}`,
                    data: null
                });
            } });
    });
}
exports.showIframe = showIframe;
//# sourceMappingURL=modal.js.map