"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../../io/sendEvent");
const subscribeToEvent_1 = require("../../io/subscribeToEvent");
exports.default = {
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
    eventEnds: (callback) => {
        const uuid = uuid_1.v4();
        sendEvent_1.default({
            action: 'event-ends',
            data: { id: uuid }
        });
        subscribeToEvent_1.default(`event-ends-listener-${uuid}`, (payload) => callback(payload));
    },
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
    eventStarts: (callback) => {
        const uuid = uuid_1.v4();
        sendEvent_1.default({
            action: 'event-starts',
            data: { id: uuid }
        });
        subscribeToEvent_1.default(`event-starts-listener-${uuid}`, (payload) => callback(payload));
    }
};
//# sourceMappingURL=when.js.map