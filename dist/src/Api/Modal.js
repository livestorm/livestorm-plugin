"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("@/IO/sendEvent");
const processTemplate_1 = require("@/IO/processTemplate");
const subscribeToEvent_1 = require("@/IO/subscribeToEvent");
const createInstance = (id) => ({
    /**
      * Send a message to the modal.
      * Can be catched via a window.addEventListener('message', () => {}).
      *
      * @param data - Any data you want to send to the iframe
      *
    */
    sendMessage(data) {
        sendEvent_1.default({
            action: `iframe-message-to-${id}`,
            data: { data, id }
        });
    }
});
exports.default = {
    /**
      * Display a modal with custom HTML content.
      * Useful for many use cases including : forms, call to actions, information box, etc
      *
      * @example Modal.showIframe({
      *    size: 'large',
      *    template: '<p>{{ content }}</p>',
      *    variables: { content: 'hello' }
      *    onMessage: (message) => {}
      *  })
      *
      * @param size - Customize the width of the modal (normal, large, extraLarge)
      * @param template - The HTML content you want to display in the modal (can contain CSS or JS)
      * @param variables - Hash of variables you can interpolate into the HTML template
      * @param onMessage - Function called whenever the postMessage({}) function is called within the HTML
      *
      *
    */
    showIframe(data) {
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
};
//# sourceMappingURL=Modal.js.map