"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../IO/sendEvent");
const processTemplate_1 = require("../IO/processTemplate");
const subscribeToEvent_1 = require("../IO/subscribeToEvent");
exports.default = {
    showIframe(data) {
        const uuid = uuid_1.v4();
        subscribeToEvent_1.default(`modal-show-iframe-message-for-${uuid}`, (response) => data.onMessage(response));
        sendEvent_1.default({
            action: 'modal-show-iframe',
            data: { template: processTemplate_1.default(data.template, data.variables), id: uuid }
        });
    }
};
//# sourceMappingURL=Modal.js.map