"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPanel = void 0;
const uuid_1 = require("uuid");
const sendEvent_1 = require("../../io/sendEvent");
function registerPanel(options) {
    const uuid = uuid_1.v4();
    sendEvent_1.default({
        action: 'register-sidebar-panel',
        data: Object.assign(Object.assign({}, options), { id: uuid })
    });
}
exports.registerPanel = registerPanel;
//# sourceMappingURL=index.js.map