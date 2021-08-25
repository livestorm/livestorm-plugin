"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../io/sendEvent");
const subscribeToEvent_1 = require("../io/subscribeToEvent");
const processTemplate_1 = require("../io/processTemplate");
const createInstance = (id) => ({
    /**
     *
     * Send a message to the iframe.
     * Can be catched via a window.addEventListener('message', () => {}) inside the template
     *
    */
    sendMessage(data) {
        sendEvent_1.default({
            action: `iframe-message-to-${id}`,
            data: { data, id }
        });
    }
});
function actsAsListenableIframe(eventName, iframe, additionalData = {}) {
    return new Promise((resolve) => {
        const uuid = uuid_1.v4();
        subscribeToEvent_1.default(`iframe-message-for-${uuid}`, (response) => iframe.onMessage(response));
        sendEvent_1.default({
            action: eventName,
            data: Object.assign({ template: processTemplate_1.default(iframe.template, iframe.variables || {}), id: uuid }, additionalData)
        });
        resolve(createInstance(uuid));
    });
}
exports.default = actsAsListenableIframe;
//# sourceMappingURL=actsAsListenableIframe.js.map