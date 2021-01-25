"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../IO/sendEvent");
const processTemplate_1 = require("../IO/processTemplate");
const subscribeToEvent_1 = require("../IO/subscribeToEvent");
const createStream = (id) => ({
    update(params) {
        sendEvent_1.default({
            action: 'update-stream',
            data: { template: processTemplate_1.default(params.template, params.variables), id }
        });
    },
    destroy() {
        sendEvent_1.default({
            action: 'remove-stream',
            data: { id }
        });
    }
});
exports.default = {
    addStream(data) {
        return new Promise((resolve) => {
            const uuid = uuid_1.v4();
            subscribeToEvent_1.default(`stream-message-for-${uuid}`, (response) => data.onMessage(response));
            sendEvent_1.default({
                action: 'add-stream',
                data: { template: processTemplate_1.default(data.template, data.variables), id: uuid }
            });
            resolve(createStream(uuid));
        });
    }
};
//# sourceMappingURL=Streams.js.map