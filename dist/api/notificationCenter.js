"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showIframe = void 0;
const uuid_1 = require("uuid");
const sendEvent_1 = require("../io/sendEvent");
const processTemplate_1 = require("../io/processTemplate");
/**
 *
 * Displays custom HTML content within the Notification aera of the Room.
 * Can be used to display notifications or temporary information on top of the Room.
 * The content of the NotificationCenter is automatically flushed after 12 seconds.
 *
 * The background is transparent to allow completely custom UI.
 *
 * @example NotificationCenter.showIframe('<p>{{ foo }}</p>', { foo: 'bar' })
 *
 * @doc https://developers.livestorm.co/docs/notificationcenter#showiframe
 *
 */
function showIframe(template, variables) {
    sendEvent_1.default({
        action: 'notification-center-show-iframe',
        data: {
            template: processTemplate_1.default(template, variables),
            id: uuid_1.v4()
        }
    });
}
exports.showIframe = showIframe;
//# sourceMappingURL=notificationCenter.js.map