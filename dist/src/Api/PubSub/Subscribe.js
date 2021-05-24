"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendEvent_1 = require("@/io/sendEvent");
const subscribeToEvent_1 = require("@/io/subscribeToEvent");
/**
  * Subscribe to a Published event.
  * Can be used to trigger any action whenever an event is Published in use cases such as :
  * chat, dynamic content, video games, breakout rooms, polls, etc.
  *
  *
  * @example PubSub.subscribe('say-hello', (message) => {})
  *
  * @param eventName - The name of the event you want to subscribe to.
  * @param onEventReceived - Callback called whenever a published event matches the eventName
  *
  *
*/
function Subscribe(eventName, onEventReceived) {
    subscribeToEvent_1.default(eventName, (message) => onEventReceived(message));
    sendEvent_1.default({
        action: 'subscribe-event',
        data: { eventName }
    });
}
exports.default = Subscribe;
//# sourceMappingURL=subscribe.js.map