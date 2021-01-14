"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../IO/sendEvent");
const subscribeToEvent_1 = require("../IO/subscribeToEvent");
exports.default = {
    register: ({ label, icon, onClick }) => {
        const uuid = uuid_1.v4();
        sendEvent_1.default({
            action: 'register-share-button',
            data: { label, icon, id: uuid }
        });
        subscribeToEvent_1.default(`register-share-button-${uuid}`, () => onClick());
    }
};
//# sourceMappingURL=RegisterShareButton.js.map