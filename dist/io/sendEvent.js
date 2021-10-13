"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("../configuration");
function sendEvent(payload) {
    const messageData = Object.assign({ pluginName: configuration_1.default.get('pluginName') }, payload);
    parent.postMessage(JSON.stringify(messageData), '*');
}
exports.default = sendEvent;
//# sourceMappingURL=sendEvent.js.map