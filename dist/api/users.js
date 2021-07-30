"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.everyone = exports.teamMembers = exports.me = void 0;
const simpleCallbackHandler_1 = require("../io/simpleCallbackHandler");
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
        simpleCallbackHandler_1.default({
            action: 'users-me',
            callback: ({ users }) => resolve(users)
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
        simpleCallbackHandler_1.default({
            action: 'users-team-members',
            callback: ({ users }) => resolve(users)
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
        simpleCallbackHandler_1.default({
            action: 'users-everyone',
            callback: ({ users }) => resolve(users)
        });
    });
}
exports.everyone = everyone;
//# sourceMappingURL=users.js.map