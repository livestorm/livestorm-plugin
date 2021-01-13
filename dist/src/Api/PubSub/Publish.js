"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendEvent_1 = require("../../IO/sendEvent");
function Publish(event, data) {
    sendEvent_1.default({
        action: 'publish-event',
        data: Object.assign({ eventName: event }, data)
    });
}
exports.default = Publish;
//# sourceMappingURL=Publish.js.map