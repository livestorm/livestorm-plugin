"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLeaves = exports.userJoins = exports.eventStarts = exports.eventEnds = void 0;
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
  * @param callback - A function to be called whenever the event is triggered
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
  * @param callback - A function to be called whenever the event is triggered
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
  * @param callback - A function to be called whenever the event is triggered
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
  * @param callback - A function to be called whenever the event is triggered
  *
*/
function userLeaves(callback) {
    simpleCallbackHandler_1.default({ action: 'user-leaves', callback });
}
exports.userLeaves = userLeaves;
//# sourceMappingURL=when.js.map