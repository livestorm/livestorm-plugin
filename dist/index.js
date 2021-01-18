"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PubSub_1 = require("./src/Api/PubSub");
const RegisterShareButton_1 = require("./src/Api/RegisterShareButton");
const Configuration_1 = require("./src/Configuration");
const Register_1 = require("./src/Api/Register");
exports.default = {
    Configuration: Configuration_1.default,
    PubSub: PubSub_1.default,
    RegisterShareButton: RegisterShareButton_1.default,
    register: Register_1.default
};
//# sourceMappingURL=index.js.map