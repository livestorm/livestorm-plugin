"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventStarts = exports.eventEnds = void 0;
const uuid_1 = require("uuid");
const sendEvent_1 = require("../io/sendEvent");
const subscribeToEvent_1 = require("../io/subscribeToEvent");
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
    const uuid = uuid_1.v4();
    sendEvent_1.default({
        action: 'event-ends',
        data: { id: uuid }
    });
    subscribeToEvent_1.default(`event-ends-listener-${uuid}`, (payload) => callback(payload));
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
    const uuid = uuid_1.v4();
    sendEvent_1.default({
        action: 'event-starts',
        data: { id: uuid }
    });
    subscribeToEvent_1.default(`event-starts-listener-${uuid}`, (payload) => callback(payload));
}
exports.eventStarts = eventStarts;
//# sourceMappingURL=when.js.map