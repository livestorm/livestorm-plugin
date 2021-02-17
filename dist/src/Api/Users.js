"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../IO/sendEvent");
const subscribeToEvent_1 = require("../IO/subscribeToEvent");
const Configuration_1 = require("../Configuration");
const users = {
    me: Configuration_1.default.data.event.users.me,
    teamMembers: Configuration_1.default.data.event.users.teamMembers,
    everyone() {
        return new Promise((resolve, reject) => {
            const uuid = uuid_1.v4();
            subscribeToEvent_1.default(`users-everyone-${uuid}`, ({ users }) => resolve(users));
            sendEvent_1.default({
                action: 'users-everyone',
                data: { id: uuid }
            });
        });
    }
};
exports.default = users;
//# sourceMappingURL=Users.js.map