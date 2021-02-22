"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../IO/sendEvent");
const processTemplate_1 = require("../IO/processTemplate");
const subscribeToEvent_1 = require("../IO/subscribeToEvent");
const createStream = (id) => ({
    /**
      * Update the content of a stream
      *
      * @param template - The HTML document
      * @param variables - A hash of variables that you want to interpolate within the document
      *
    */
    update(params) {
        sendEvent_1.default({
            action: 'update-stream',
            data: { template: processTemplate_1.default(params.template, params.variables), id }
        });
    },
    /**
      * Remove the stream from the stage
      *
    */
    destroy() {
        sendEvent_1.default({
            action: 'remove-stream',
            data: { id }
        });
    }
});
exports.default = {
    /**
      * Add a custom HTML stream to the stage.
      * This allows you to display completely custom content to everyone in the room.
      * You can use this API to build things such as : Embed website / video, Live feed, Live coding, games, etc
      *
      * @example Streams.addStream({
      *   template: '<p>{{ content }}</p>',
      *   variables: { content: 'Live stream' },
      *   onMessage: (message) => console.log('the stream send a message')
      * })
      *
      * @param template - The HTML document
      * @param variables - A hash of variables that you want to interpolate within the document
      * @param onMessage - Method called whenever the stream posts a message
      *
      * @returns a promise that resolves with stream instance you can use to update the HTML document or destroy the stream
      *
      * @beta
      *
    */
    addStream(data) {
        return new Promise((resolve) => {
            const uuid = uuid_1.v4();
            subscribeToEvent_1.default(`stream-message-for-${uuid}`, (response) => data.onMessage(response));
            sendEvent_1.default({
                action: 'add-stream',
                data: { template: processTemplate_1.default(data.template, data.variables), id: uuid }
            });
            resolve(createStream(uuid));
        });
    }
};
//# sourceMappingURL=Streams.js.map