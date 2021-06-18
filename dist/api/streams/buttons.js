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
exports.registerCameraEffectButton = void 0;
const addButtonDefaultListeners_1 = require("../../io/addButtonDefaultListeners");
const subscribeToEvent_1 = require("../../io/subscribeToEvent");
/** Register an entry in the Camera effects panel.
 *  Can be used to trigger any action (upload custom background...))
 *
 * @example Buttons.registerCameraEffectButton({
 *   label: 'Upload a custom image',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 *
 * @param options - DefaultButtonOptions
 */
function registerCameraEffectButton(_a) {
    var { onUpload } = _a, options = __rest(_a, ["onUpload"]);
    const uuid = addButtonDefaultListeners_1.default('register-camera-effect-button', options);
    if (options.type === "upload") {
        subscribeToEvent_1.default(`register-camera-effect-button-upload-${uuid}`, (data) => onUpload(data));
    }
}
exports.registerCameraEffectButton = registerCameraEffectButton;
//# sourceMappingURL=buttons.js.map