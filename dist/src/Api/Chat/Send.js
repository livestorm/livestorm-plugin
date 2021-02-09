"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../../IO/sendEvent");
const subscribeToEvent_1 = require("../../IO/subscribeToEvent");
function Send(data) {
    const id = uuid_1.v4();
    sendEvent_1.default({
        action: 'chat-send',
        data: Object.assign({ id }, data)
    });
    return {
        id,
        destroy() {
            sendEvent_1.default({
                action: `chat-delete-${id}`,
                data: Object.assign({ id }, data)
            });
        },
        onIframeMessage(callback) {
            subscribeToEvent_1.default(`iframe-message-for-${id}`, (response) => callback(response));
        }
    };
}
exports.default = Send;
//# sourceMappingURL=Send.js.map