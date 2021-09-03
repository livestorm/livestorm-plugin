"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showIframe = void 0;
const actsAsListenableIframe_1 = require("../io/actsAsListenableIframe");
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
    return actsAsListenableIframe_1.default('modal-show-iframe', { template: data.template, variables: data.variables, onMessage: data.onMessage }, { size: data.size });
}
exports.showIframe = showIframe;
//# sourceMappingURL=modal.js.map