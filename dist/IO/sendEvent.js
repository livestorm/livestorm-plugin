"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendEvent(payload) {
    const messageData = Object.assign({ pluginName: 'livereaction' }, payload);
    parent.postMessage(JSON.stringify(messageData), 'https://app.livestorm.local');
}
exports.default = sendEvent;
//# sourceMappingURL=sendEvent.js.map