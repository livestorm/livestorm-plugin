"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUserMutesNotifications = exports.userLeaves = exports.userJoins = exports.eventStarts = exports.eventEnds = void 0;
const simpleCallbackHandler_1 = require("../io/simpleCallbackHandler");
/**
 *
 * Be notified when the event ends.
 * The callback is not called if the user joins the event after the end.
 *
 * @example When.eventEnds(() => {
 *  // do something
 * })
 *
 * @doc https://developers.livestorm.co/docs/when#eventends
 *
 */
function eventEnds(callback) {
    simpleCallbackHandler_1.default({
        action: 'event-ends',
        listener: 'event-ends-listener',
        callback
    });
}
exports.eventEnds = eventEnds;
/**
 *
 * Be notified when the event starts.
 * The callback is not called if the user joins the event after the start.
 *
 * @example When.eventStarts(() => {
 *  // do something
 * })
 *
 * @doc https://developers.livestorm.co/docs/when#eventstarts
 *
 */
function eventStarts(callback) {
    simpleCallbackHandler_1.default({
        action: 'event-starts',
        listener: 'event-starts-listener',
        callback
    });
}
exports.eventStarts = eventStarts;
/**
 *
 * Be notified when someone enters the room.
 *
 * @example When.userJoins(() => {
 *  // do something
 * })
 *
 * @doc https://developers.livestorm.co/docs/when#userjoins
 *
 */
function userJoins(callback) {
    simpleCallbackHandler_1.default({ action: 'user-joins', callback });
}
exports.userJoins = userJoins;
/**
 *
 * Be notified when someone leaves the room.
 *
 * @example When.userJoins(() => {
 *  // do something
 * })
 *
 * @doc https://developers.livestorm.co/docs/when#userleaves
 *
 */
function userLeaves(callback) {
    simpleCallbackHandler_1.default({ action: 'user-leaves', callback });
}
exports.userLeaves = userLeaves;
/**
 *
 * Be notified when the current user mutes/unmutes the notifications
 *
 * @example When.currentUserMutesNotifications( ({ muted }) => {
 *  // do something
 * })
 *
 * @doc https://developers.livestorm.co/docs/when#currentusermutesnotifications
 *
 */
function currentUserMutesNotifications(callback) {
    simpleCallbackHandler_1.default({
        action: 'current-user-mutes-notifications',
        listener: 'current-user-mutes-notifications-listener',
        callback
    });
}
exports.currentUserMutesNotifications = currentUserMutesNotifications;
//# sourceMappingURL=when.js.map