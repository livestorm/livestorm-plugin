"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerStageButton = exports.registerShareButton = void 0;
const sendEvent_1 = require("../../io/sendEvent");
const processTemplate_1 = require("../../io/processTemplate");
const subscribeToEvent_1 = require("../../io/subscribeToEvent");
const addButtonDefaultListeners_1 = require("../../io/addButtonDefaultListeners");
/** Register an entry in the Share menu for contributors.
 *  Can be used to trigger any action (sharing custom content, files, videos, etc)
 *
 * @example Stage.Buttons.registerShareButton({
 *   label: 'Share a Document',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 *
 * @doc https://developers.livestorm.co/docs/stage#registersharebutton
 */
function registerShareButton(options) {
    addButtonDefaultListeners_1.default('register-share-button', options);
}
exports.registerShareButton = registerShareButton;
/** Register an entry in the stage actions (for contributors and participants)
   *  Can be used to trigger any action (sharing custom content, files, videos, etc)
   *
   * @example Stage.Buttons.registerStageButton({
   *   label: 'React with an emoji',
   *   icon: 'smile',
   *   dropdownActions: [{ name: '😱', label: '😱' }],
   *   onClick: (payload) => {}
   * })
   *
   * @doc https://developers.livestorm.co/docs/stage#registerstagebutton
   */
function registerStageButton(options) {
    const { iframe } = options;
    const uuid = addButtonDefaultListeners_1.default('register-stage-button', Object.assign(Object.assign({}, options), { iframe: iframe ? {
            width: iframe.width,
            height: iframe.height,
            template: processTemplate_1.default(iframe.template, iframe.variables)
        } : undefined }));
    subscribeToEvent_1.default(`iframe-message-for-${uuid}`, (response) => iframe.onMessage(response));
    return {
        remove() {
            sendEvent_1.default({
                action: 'register-stage-button-remove',
                data: { id: uuid }
            });
        }
    };
}
exports.registerStageButton = registerStageButton;
//# sourceMappingURL=buttons.js.map