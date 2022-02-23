"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../../io/sendEvent");
const subscribeToEvent_1 = require("../../io/subscribeToEvent");
/**
 *
 * Adds a message in the chat.
 * Message will be sent locally to the connected user
 *
 * @example Chat.send({
 *   user: {
 *     firstName: 'Michael'
 *   },
 *   text: 'Hello world',
 *   html: '<p>Hi</p>'
 * })
 *
 * @doc https://developers.livestorm.co/docs/chat#send
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
                action: 'chat-delete',
                data: Object.assign({ id }, data)
            });
        },
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
        },
        onDelete(callback) {
            subscribeToEvent_1.default(`chat-message-deleted-${id}`, () => callback());
        },
    };
}
exports.default = Send;
//# sourceMappingURL=send.js.map