"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCameraEffectButton = void 0;
const addButtonDefaultListeners_1 = require("../../io/addButtonDefaultListeners");
const subscribeToEvent_1 = require("../../io/subscribeToEvent");
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
    const uuid = addButtonDefaultListeners_1.default('register-camera-effect-button', options);
    subscribeToEvent_1.default(`register-camera-effect-button-upload-${uuid}`, () => options.onUpload());
}
exports.registerCameraEffectButton = registerCameraEffectButton;
//# sourceMappingURL=buttons.js.map