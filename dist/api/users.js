"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.everyone = exports.teamMembers = exports.me = void 0;
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
function registerMessageAction(options) {
    addButtonDefaultListeners_1.default('users-register-people-tab-action', options);
}
exports.default = registerMessageAction;
//# sourceMappingURL=users.js.map