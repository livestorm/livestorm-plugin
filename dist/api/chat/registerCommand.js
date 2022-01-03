"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../../io/sendEvent");
const subscribeToEvent_1 = require("../../io/subscribeToEvent");
/**
 *
 * Register a chat command in the commands menu. Can be used to execute action
 * involving the chat (sharing custom content, files, videos, etc)
 *
 * @example Chat.registerCommand({
 *   command: 'dm',
 *   label: 'Send a message',
 *   params: ['@name', 'message']
 *   onTrigger: (data) => console.log('someone sends a private message')
 * })
 *
 * @doc https://developers.livestorm.co/docs/chat#registercommand
 *
 */
function registerCommand({ label, command, params, onTrigger }) {
    const uuid = uuid_1.v4();
    sendEvent_1.default({
        action: 'chat-register-command',
        data: { label, command, params, id: uuid }
    });
    subscribeToEvent_1.default(`chat-register-command-${uuid}`, (data) => {
        onTrigger(data);
    });
}
exports.default = registerCommand;
//# sourceMappingURL=registerCommand.js.map