"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("@/io/sendEvent");
const processTemplate_1 = require("@/io/processTemplate");
exports.default = {
    /**
      * Displays custom HTML content within the Notification aera of the Room.
      * Can be used to display notifications or temporary information on top of the Room.
      * The content of the NotificationCenter is automatically flushed after 12 seconds.
      *
      * The background is transparent to allow completely custom UI.
      *
      * @example NotificationCenter.showIframe('<p>{{ content }}</p>', { content: 'lol' })
      *
      * @param template - The HTML content you want to display in the modal (can contain CSS or JS)
      * @param variables - Hash of variables you can interpolate into the HTML template
      *
      *
    */
    showIframe(template, variables) {
        sendEvent_1.default({
            action: 'notification-center-show-iframe',
            data: {
                template: processTemplate_1.default(template, variables),
                id: uuid_1.v4()
            }
        });
    }
};
//# sourceMappingURL=notificationCenter.js.map