"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBackground = void 0;
const sendEvent_1 = require("../io/sendEvent");
/**
  * Allows you to customize the background color of the Room.
  * Color is defined with an HSL style.
  * Luminance is fixed in order to assert Room colors legibility
  *
  * @example Livestorm.Theme.setBackground({ hue: 255, saturation: 100 })
  *
  * @param hue - A number between 0 and 360
  * @param saturation - A percentage between 0 and 100
  *
  */
function setBackground({ hue, saturation }) {
    sendEvent_1.default({
        action: 'theme-set-background',
        data: { hue, saturation }
    });
}
exports.setBackground = setBackground;
//# sourceMappingURL=theme.js.map