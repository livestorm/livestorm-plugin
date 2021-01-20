"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../IO/sendEvent");
const processTemplate_1 = require("../IO/processTemplate");
exports.default = {
    showIframe(template, variables) {
        sendEvent_1.default({
            action: 'notification-center-show-iframe',
            data: {
                template: processTemplate_1.default(template, variables),
                id: uuid_1.v4()
            }
        });
    }
};
//# sourceMappingURL=NotificationCenter.js.map