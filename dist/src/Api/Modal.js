"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendEvent_1 = require("../IO/sendEvent");
const processTemplate_1 = require("../IO/processTemplate");
exports.default = {
    showIframe(template, variables) {
        sendEvent_1.default({
            action: 'modal-show-iframe',
            data: {
                template: processTemplate_1.default(template, variables)
            }
        });
    }
};
//# sourceMappingURL=Modal.js.map