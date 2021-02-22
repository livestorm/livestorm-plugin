"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PubSub_1 = require("./src/Api/PubSub");
const Chat_1 = require("./src/Api/Chat");
const Streams_1 = require("./src/Api/Streams");
const RegisterShareButton_1 = require("./src/Api/RegisterShareButton");
const RegisterStageButton_1 = require("./src/Api/RegisterStageButton");
const Theme_1 = require("./src/Api/Theme");
const NotificationCenter_1 = require("./src/Api/NotificationCenter");
const Users_1 = require("./src/Api/Users");
const Modal_1 = require("./src/Api/Modal");
const Configuration_1 = require("./src/Configuration");
const Register_1 = require("./src/Api/Register");
exports.default = {
    Configuration: Configuration_1.default,
    PubSub: PubSub_1.default,
    Streams: Streams_1.default,
    RegisterShareButton: RegisterShareButton_1.default,
    RegisterStageButton: RegisterStageButton_1.default,
    NotificationCenter: NotificationCenter_1.default,
    Modal: Modal_1.default,
    Users: Users_1.default,
    Chat: Chat_1.default,
    Theme: Theme_1.default,
    register: Register_1.default
};
//# sourceMappingURL=index.js.map