"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../../IO/sendEvent");
const subscribeToEvent_1 = require("../../IO/subscribeToEvent");
function Listen(callback) {
    const uuid = uuid_1.v4();
    sendEvent_1.default({
        action: 'chat-listen',
        data: { id: uuid }
    });
    subscribeToEvent_1.default(`chat-listener-${uuid}`, (data) => callback(data));
}
exports.default = Listen;
//# sourceMappingURL=Listen.js.map