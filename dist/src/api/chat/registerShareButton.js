"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("@/io/sendEvent");
const subscribeToEvent_1 = require("@/io/subscribeToEvent");
/**
  * Register an entry in the Share menu of the chat.
  * Can be used to trigger any action (sharing custom content, files, videos, etc)
  *
  * @example Chat.registerShareButton({
  *   label: 'Share a Document',
  *   imageSource: 'http://image/image.png',
  *   onClick: () => console.log('someone clicked this button')
  * })
  *
  * @param label - The label of the action
  * @param icon - An icon from the https://feathericons.com library (not recommended)
  * @param imageSource - URL of an icon (png, svg) that will be displayed next to your button
  * @param onClick - Function called whenever someone clicks on your button
  *
*/
function registerShareButton({ label, icon, imageSource, onClick }) {
    const uuid = uuid_1.v4();
    sendEvent_1.default({
        action: 'chat-register-share-button',
        data: { label, icon, imageSource, id: uuid }
    });
    subscribeToEvent_1.default(`chat-register-share-button-${uuid}`, () => onClick());
}
exports.default = registerShareButton;
//# sourceMappingURL=registerShareButton.js.map