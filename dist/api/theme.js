"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBackgroundImage = exports.setBackgroundColor = void 0;
const theme_1 = require("../types/theme");
const sendEvent_1 = require("../io/sendEvent");
/**
 *
 * Allows you to customize the background color of the Room.
 * Color is defined with an HSL style.
 * Luminance is fixed in order to assert Room colors legibility
 *
 * @example Livestorm.Theme.setBackgroundColor({ hue: 255, saturation: 100 })
 *
 * @doc https://developers.livestorm.co/docs/theme#setbackgroundcolor
 *
 */
function setBackgroundColor({ hue, saturation }) {
    sendEvent_1.default({
        action: 'theme-set-background',
        data: { hue, saturation }
    });
}
exports.setBackgroundColor = setBackgroundColor;
/**
 *
 * Allows you to set an image to the background
 *
 * @example Livestorm.Theme.setBackgroundImage({ hue: 255, saturation: 100 })
 *
 * @doc https://developers.livestorm.co/docs/theme#setbackgroundimage
 *
 */
function setBackgroundImage(url, breakpoints = {}) {
    const style = document.createElement('style');
    style.innerHTML = `
      ${theme_1.AppSelectors.RoomContent} {
        background-image: url('${url}');
        background-size: cover;
        background-position: center center;
      }

      ${breakpoints.sm ? `@media (min-width: 640px) {
          ${theme_1.AppSelectors.RoomContent} {
            background-image: url('${breakpoints.sm}');
          }
        }` : ''}

      ${breakpoints.md ? `@media (min-width: 768px) {
          ${theme_1.AppSelectors.RoomContent} {
            background-image: url('${breakpoints.md}');
          }
        }` : ''}

      ${breakpoints.lg ? `@media (min-width: 1024px) {
          ${theme_1.AppSelectors.RoomContent} {
            background-image: url('${breakpoints.lg}');
          }
        }` : ''}

      ${breakpoints.xl ? `@media (min-width: 1280px) {
          ${theme_1.AppSelectors.RoomContent} {
            background-image: url('${breakpoints.xl}');
          }
        }` : ''}
  `;
    window.parent.document.body.append(style);
}
exports.setBackgroundImage = setBackgroundImage;
//# sourceMappingURL=theme.js.map