"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPeopleTabAction = exports.connectedCount = exports.everyone = exports.teamMembers = exports.me = void 0;
const addButtonDefaultListeners_1 = require("../io/addButtonDefaultListeners");
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
/**
  * Returns the number of the connected users
  *
  * @example await Livestorm.Users.connectedCount()
  * @returns a promise that resolves with the number of the connected users
  */
function connectedCount() {
    return new Promise((resolve) => {
        simpleCallbackHandler_1.default({
            action: 'users-connected-count',
            callback: ({ count }) => resolve(count)
        });
    });
}
exports.connectedCount = connectedCount;
/**
 *
 * Register an entry in the context menu of a user in the people tab.
 * Can be used to trigger any action (sharing custom content, files, videos, etc)
 *
 * @example Users.registerPeopleTabAction({
 *   label: 'Send a private message',
 *   imageSource: 'http://image/image.png',
 *   onClick: (user) => console.log('someone clicked this button')
 * })
 *
 * @doc https://developers.livestorm.co/docs/users#registerpeopletabaction
 *
 */
function registerPeopleTabAction(options) {
    addButtonDefaultListeners_1.default('users-register-people-tab-action', options);
}
exports.registerPeopleTabAction = registerPeopleTabAction;
//# sourceMappingURL=users.js.map