"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../../IO/sendEvent");
function Send(data) {
    sendEvent_1.default({
        action: 'chat-send',
        data: Object.assign({ id: uuid_1.v4() }, data)
    });
}
exports.default = Send;
//# sourceMappingURL=Send.js.map