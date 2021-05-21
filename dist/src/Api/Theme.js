"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendEvent_1 = require("@/io/sendEvent");
exports.default = {
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
    setBackground({ hue, saturation }) {
        sendEvent_1.default({
            action: 'theme-set-background',
            data: { hue, saturation }
        });
    }
};
//# sourceMappingURL=theme.js.map