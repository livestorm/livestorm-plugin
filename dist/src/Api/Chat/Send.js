"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../../IO/sendEvent");
const subscribeToEvent_1 = require("../../IO/subscribeToEvent");
/**
  * Send a message in the chat.
  * By default message will be sent locally to the connected user
  *
  * @example Chat.send({
  *   user: {
  *     firstName: 'Michael'
  *   },
  *   text: 'Hello world',
  *   html: '<p>Hi</p>'
  * })
  * @returns An instance of the created Message that you can use to delete the message or be notified whenever the HTML posts message
  *
*/
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