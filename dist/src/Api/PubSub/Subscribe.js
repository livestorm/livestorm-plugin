"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendEvent_1 = require("../../IO/sendEvent");
function Subscribe(eventName, onEventReceived) {
    window.addEventListener('message', (message) => {
        console.log('DZAOIDZAOO', message);
        onEventReceived(message);
    });
    sendEvent_1.default({
        action: 'subscribe-event',
        data: { eventName }
    });
}
exports.default = Subscribe;
//# sourceMappingURL=Subscribe.js.map