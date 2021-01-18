"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function subscribeToEvent(eventName, callback) {
    window.addEventListener('message', (message) => {
        if (message.data.eventName === eventName)
            callback(message.data.data);
    });
}
exports.default = subscribeToEvent;
//# sourceMappingURL=subscribeToEvent.js.map