"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("./sendEvent");
const subscribeToEvent_1 = require("./subscribeToEvent");
function simpleCallbackHandler({ action, listener, callback }) {
    const uuid = uuid_1.v4();
    sendEvent_1.default({
        action,
        data: { id: uuid }
    });
    subscribeToEvent_1.default(`${listener || action}-${uuid}`, (payload) => callback(payload));
}
exports.default = simpleCallbackHandler;
//# sourceMappingURL=simpleCallbackHandler.js.map