"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendEvent_1 = require("../IO/sendEvent");
exports.default = {
    register: ({ label, icon, onClick }) => {
        sendEvent_1.default({
            action: 'register-share-button',
            data: { label, icon }
        });
    }
};
//# sourceMappingURL=RegisterShareButton.js.map