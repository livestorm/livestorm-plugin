"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../../io/sendEvent");
const subscribeToEvent_1 = require("../../io/subscribeToEvent");
/**
  * Broadcasts a message in the chat.
  * Message will be displayed to all the recipients of the chat
  *
  * @example Chat.broadcast({
  *   text: 'Hello world',
  *   html: '<p>Hi</p>'
  * })
  * @returns An instance of the created Message that you can use to delete the message or be notified whenever the HTML posts message
  *
*/
function Broadcast(data) {
    const id = uuid_1.v4();
    sendEvent_1.default({
        action: 'chat-broadcast',
        data: Object.assign({ id }, data)
    });
    return {
        id,
        onIframeMessage(callback) {
            subscribeToEvent_1.default(`iframe-message-for-${id}`, (response) => callback(response));
        },
        /**
        * Send a message to the iframe.
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
    };
}
exports.default = Broadcast;
//# sourceMappingURL=broadcast.js.map