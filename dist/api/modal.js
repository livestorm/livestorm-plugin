"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showIframe = void 0;
const uuid_1 = require("uuid");
const sendEvent_1 = require("../io/sendEvent");
const processTemplate_1 = require("../io/processTemplate");
const subscribeToEvent_1 = require("../io/subscribeToEvent");
const createInstance = (id) => ({
    /**
     *
     * Send a message to the modal.
     * Can be catched via a window.addEventListener('message', () => {}).
     *
    */
    sendMessage(data) {
        sendEvent_1.default({
            action: `iframe-message-to-${id}`,
            data: { data, id }
        });
    }
});
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
    return new Promise((resolve) => {
        const uuid = uuid_1.v4();
        subscribeToEvent_1.default(`iframe-message-for-${uuid}`, (response) => data.onMessage(response));
        sendEvent_1.default({
            action: 'modal-show-iframe',
            data: { template: processTemplate_1.default(data.template, data.variables), size: data.size, id: uuid }
        });
        resolve(createInstance(uuid));
    });
}
exports.showIframe = showIframe;
//# sourceMappingURL=modal.js.map