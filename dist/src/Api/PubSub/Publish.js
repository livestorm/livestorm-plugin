"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendEvent_1 = require("../../IO/sendEvent");
/**
  * Publish an event to any connected Subscriber via websockets.
  * Can be used to communicate to other people in the Room for use cases such as :
  * chat, dynamic content, video games, breakout rooms, polls, etc.
  *
  * Subscribers are not shared between rooms.
  *
  * @example PubSub.publish('say-hello', { data: { custom: 'payload' }})
  *
  * @param event - The name of the event you want to publish (needs to match the Subscribed event)
  * @param data - Any custom payload
  *
  *
*/
function Publish(event, data) {
    sendEvent_1.default({
        action: 'publish-event',
        data: Object.assign({ eventName: event }, data)
    });
}
exports.default = Publish;
//# sourceMappingURL=Publish.js.map