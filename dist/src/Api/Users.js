"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("@/io/sendEvent");
const subscribeToEvent_1 = require("@/io/subscribeToEvent");
const users = {
    me: () => {
        return new Promise((resolve) => {
            const uuid = uuid_1.v4();
            // TODO: There is a mix between users and user
            subscribeToEvent_1.default(`users-me-${uuid}`, ({ users }) => resolve(users));
            sendEvent_1.default({
                action: 'users-me',
                data: { id: uuid }
            });
        });
    },
    teamMembers: () => {
        return new Promise((resolve) => {
            const uuid = uuid_1.v4();
            subscribeToEvent_1.default(`users-team-members-${uuid}`, ({ users }) => resolve(users));
            sendEvent_1.default({
                action: 'users-team-members',
                data: { id: uuid }
            });
        });
    },
    everyone() {
        return new Promise((resolve) => {
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
//# sourceMappingURL=users.js.map