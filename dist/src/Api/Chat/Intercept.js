"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../../IO/sendEvent");
const subscribeToEvent_1 = require("../../IO/subscribeToEvent");
function Intercept(matcher, callback) {
    const uuid = uuid_1.v4();
    sendEvent_1.default({
        action: 'chat-intercept',
        data: { id: uuid, matcher: matcher.source }
    });
    subscribeToEvent_1.default(`chat-intercepter-${uuid}`, (data) => callback(data));
}
exports.default = Intercept;
//# sourceMappingURL=Intercept.js.map