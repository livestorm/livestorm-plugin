"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendEvent_1 = require("../../IO/sendEvent");
const subscribeToEvent_1 = require("../../IO/subscribeToEvent");
function Subscribe(eventName, onEventReceived) {
    subscribeToEvent_1.default(eventName, (message) => onEventReceived(message));
    sendEvent_1.default({
        action: 'subscribe-event',
        data: { eventName }
    });
}
exports.default = Subscribe;
//# sourceMappingURL=Subscribe.js.map