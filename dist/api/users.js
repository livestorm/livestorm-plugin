"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.everyone = exports.teamMembers = exports.me = void 0;
const uuid_1 = require("uuid");
const sendEvent_1 = require("../io/sendEvent");
const subscribeToEvent_1 = require("../io/subscribeToEvent");
/**
  * Returns the current user information
  *
  * @example await Livestorm.Users.me()
  *
  * @returns a promise that resolves with the user information as a hash
  *
  */
function me() {
    return new Promise((resolve) => {
        const uuid = uuid_1.v4();
        // TODO: There is a mix between users and user
        subscribeToEvent_1.default(`users-me-${uuid}`, ({ users }) => resolve(users));
        sendEvent_1.default({
            action: 'users-me',
            data: { id: uuid }
        });
    });
}
exports.me = me;
/**
  * Returns an array containing all the team members of the event
  *
  * @example await Livestorm.Users.teamMembers()
  * @returns a promise that resolves with the users information as an array
  */
function teamMembers() {
    return new Promise((resolve) => {
        const uuid = uuid_1.v4();
        subscribeToEvent_1.default(`users-team-members-${uuid}`, ({ users }) => resolve(users));
        sendEvent_1.default({
            action: 'users-team-members',
            data: { id: uuid }
        });
    });
}
exports.teamMembers = teamMembers;
/**
  * Returns an array containing all the currently connected people in the Room.
  * This list may change during the lifecycle of an event
  *
  * @example await Livestorm.Users.everyone()
  *
  * @returns a promise that resolves with the users information as an array
  *
  */
function everyone() {
    return new Promise((resolve) => {
        const uuid = uuid_1.v4();
        subscribeToEvent_1.default(`users-everyone-${uuid}`, ({ users }) => resolve(users));
        sendEvent_1.default({
            action: 'users-everyone',
            data: { id: uuid }
        });
    });
}
exports.everyone = everyone;
//# sourceMappingURL=users.js.map