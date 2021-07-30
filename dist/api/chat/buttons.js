"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerChatShareButton = void 0;
const addButtonDefaultListeners_1 = require("../../io/addButtonDefaultListeners");
/**
 * Register an entry in the Share menu of the chat.
 * Can be used to trigger any action (sharing custom content, files, videos, etc)
 *
 * @example Chat.Buttons.registerChatShareButton({
 *   label: 'Share a Document',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 *
 * @doc https://developers.livestorm.co/docs/chat#registersharebutton
 */
function registerChatShareButton(options) {
    addButtonDefaultListeners_1.default('chat-register-share-button', options);
}
exports.registerChatShareButton = registerChatShareButton;
//# sourceMappingURL=buttons.js.map