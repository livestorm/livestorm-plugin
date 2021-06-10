"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCameraEffectButton = exports.registerStageButton = exports.registerShareButton = exports.registerChatShareButton = void 0;
const uuid_1 = require("uuid");
const sendEvent_1 = require("../io/sendEvent");
const processTemplate_1 = require("../io/processTemplate");
const subscribeToEvent_1 = require("../io/subscribeToEvent");
const defaultDispatch = (eventName, _a) => {
    var { onClick } = _a, options = __rest(_a, ["onClick"]);
    const uuid = uuid_1.v4();
    sendEvent_1.default({
        action: eventName,
        data: Object.assign(Object.assign({}, options), { id: uuid })
    });
    subscribeToEvent_1.default(`${eventName}-${uuid}`, () => onClick());
    return uuid;
};
/** Register an entry in the Share menu of the chat.
 *  Can be used to trigger any action (sharing custom content, files, videos, etc)
 *
 * @exemple Buttons.registerChatShareButton({
 *   label: 'Share a Document',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 *
 * @param options - DefaultButtonOptions
 */
function registerChatShareButton(options) {
    defaultDispatch('chat-register-share-button', options);
}
exports.registerChatShareButton = registerChatShareButton;
/** Register an entry in the Share menu for contributors.
 *  Can be used to trigger any action (sharing custom content, files, videos, etc)
 *
 * @exemple Buttons.registerShareButton({
 *   label: 'Share a Document',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 *
 * @param options - DefaultButtonOptions
 */
function registerShareButton(options) {
    defaultDispatch('register-share-button', options);
}
exports.registerShareButton = registerShareButton;
/** Register an entry in the stage actions (for contributors and participants)
 *  Can be used to trigger any action (sharing custom content, files, videos, etc)
 *
 * @exemple Buttons.registerStageButton({
 *   label: 'React with an emoji',
 *   icon: 'smile',
 *   dropdownActions: [{ name: '😱', label: '😱' }],
 *   onClick: (payload) => {}
 * })
 *
 * @param options - StageButtonOptions
 */
function registerStageButton(options) {
    const { iframe } = options;
    const uuid = defaultDispatch('register-stage-button', Object.assign(Object.assign({}, options), { iframe: iframe ? {
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
/** Register an entry in the Camera effects panel.
 *  Can be used to trigger any action (upload custom background...))
 *
 * @exemple Buttons.registerCameraEffectButton({
 *   label: 'Upload a custom image',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 *
 * @param options - DefaultButtonOptions
 */
function registerCameraEffectButton(options) {
    defaultDispatch('register-camera-effect-button', options);
}
exports.registerCameraEffectButton = registerCameraEffectButton;
//# sourceMappingURL=buttons.js.map