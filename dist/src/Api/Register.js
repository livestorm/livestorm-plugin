"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subscribeToEvent_1 = require("../IO/subscribeToEvent");
const Configuration_1 = require("../Configuration");
function register() {
    subscribeToEvent_1.default('register', (data) => Configuration_1.default.set(data));
}
exports.default = register;
//# sourceMappingURL=Register.js.map