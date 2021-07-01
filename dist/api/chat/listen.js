"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../../io/sendEvent");
const subscribeToEvent_1 = require("../../io/subscribeToEvent");
/**
 *
 * Be notified whenever someone posts a message in the chat.
 * May be used to create Chat bots, or forward messages to another API (slack, intercom, etc)
 *
 * @example Chat.listen(message => console.log(`Someone said ${message}`))
 *
 * @doc https://developers.livestorm.co/docs/chat#listen
 *
 */
function Listen(callback, options) {
    const uuid = uuid_1.v4();
    sendEvent_1.default({
        action: `chat-listen${(options === null || options === void 0 ? void 0 : options.everyone) ? '-everyone' : ''}`,
        data: { id: uuid }
    });
    subscribeToEvent_1.default(`chat-listener-${(options === null || options === void 0 ? void 0 : options.everyone) ? 'everyone-' : ''}${uuid}`, (data) => callback(data));
}
exports.default = Listen;
//# sourceMappingURL=listen.js.map