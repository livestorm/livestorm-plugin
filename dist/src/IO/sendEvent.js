"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Configuration_1 = require("@/Configuration");
function sendEvent(payload) {
    const messageData = Object.assign({ pluginName: Configuration_1.default.pluginName }, payload);
    parent.postMessage(JSON.stringify(messageData), '*');
}
exports.default = sendEvent;
//# sourceMappingURL=sendEvent.js.map