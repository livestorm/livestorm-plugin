"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../IO/sendEvent");
const subscribeToEvent_1 = require("../IO/subscribeToEvent");
exports.default = {
    register: ({ iframe, dropdownActions, label, icon, tooltip, onClick }) => {
        const uuid = uuid_1.v4();
        sendEvent_1.default({
            action: 'register-stage-button',
            data: { label, icon, tooltip, id: uuid, iframe, dropdownActions }
        });
        subscribeToEvent_1.default(`register-stage-button-${uuid}`, () => onClick());
    }
};
//# sourceMappingURL=RegisterStageButton.js.map