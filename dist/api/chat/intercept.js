"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../../io/sendEvent");
const subscribeToEvent_1 = require("../../io/subscribeToEvent");
/**
 *
 * Intercept Chat messages matching a specific regex.
 * Once intercepted, the message will not be displayed in the chat.
 * Useful to filter language or create custom chat commands.
 *
 * @example Chat.intercept(/lol/, (message) => console.log(`someone said ${message}`))
 *
 * @doc https://developers.livestorm.co/docs/chat#intercept
 *
 */
function Intercept(matcher, callback) {
    const uuid = uuid_1.v4();
    sendEvent_1.default({
        action: 'chat-intercept',
        data: { id: uuid, matcher: matcher.source }
    });
    subscribeToEvent_1.default(`chat-intercepter-${uuid}`, (data) => callback(data));
}
exports.default = Intercept;
//# sourceMappingURL=intercept.js.map