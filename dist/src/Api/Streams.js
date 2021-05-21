"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("@/io/sendEvent");
const processTemplate_1 = require("@/io/processTemplate");
const subscribeToEvent_1 = require("@/io/subscribeToEvent");
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
      * Add a custom HTML media stream to the stage.
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
    },
    /**
      * Expose a custom video effect. Gives the ability to the user to select an input stream effect.
      * This API can be used to create stream with effects such as (background blur, filters, OSD, etc)
      *
      * Registering a video effect consists of 2 steps :
      * - calling the registerCameraEffect function
      * - creating the video stream from an HTML template
      *
      * The HTML template is a document that will be executed in a sandboxed iframe. From there, you can query permission
      * for the user's webcam and use it inside a canvas to enhance the initial stream with custom effect.
      *
      * Inside the iframe you need to declare a function `setupStream`. It will be called when the user selects your video effect.
      *
      * Please be aware that canvas exposed via this API must not make cross origin calls.
      *
      * @example Streams.registerCameraEffect({
      *   template: `<script>window.setupStream = () => publishStream()</script>`,
      *   variables: { foo: 'bar' }
      * })
      *
      * @param label - A label to indicate the purpose of your video effect
      * @param imageUrl - An image to illustrate your plugin
      * @param template - The HTML document that creates the video stream
      * @param variables - A hash of variables that you want to interpolate within the document
      * @param disabled - A boolean to disable the effect
      *
      * @see https://webrtc.github.io/samples/src/content/capture/canvas-pc/
      * @beta
      *
    */
    registerCameraEffect(data) {
        const uuid = uuid_1.v4();
        sendEvent_1.default({
            action: 'stream-register-camera-effect',
            data: {
                label: data.label,
                imageUrl: data.imageUrl,
                disabled: !!data.disabled,
                template: processTemplate_1.default(data.template, data.variables),
                id: uuid
            }
        });
    },
    /**
      *
      * Expose multiple effects with a single template.
      * This allows to get a quicker feedback when selecting a template by switching effect without reloading the
      * entire iframe component.
      *
      * The internal of this API is similar to registerCameraEffect, please refer to its documentation for a better understanding
      *
      * @example Streams.registerMultipleCameraEffects({
      *   template: `<script>window.setupStream = () => publishStream()</script>`,
      *   effects: [
      *     {
      *       variables: { foo: bar },
      *       label: 'Moon'
      *     }
      *   ]
      * })
      *
      * @param template - The HTML document that creates the video stream
      * @param disabled - A boolean to disable the effects
      * @param effects - An array of effect under format Array<{ variables: {}, label: string, id: string }>
      *
      * @beta
      *
    */
    registerMultipleCameraEffects(data) {
        const batchId = uuid_1.v4();
        data.effects.forEach((effect) => {
            const uuid = uuid_1.v4();
            sendEvent_1.default({
                action: 'stream-register-camera-effect',
                data: {
                    label: effect.label,
                    imageUrl: effect.imageUrl,
                    disabled: !!data.disabled,
                    template: processTemplate_1.default(data.template, effect.variables),
                    variables: effect.variables,
                    isMultiple: true,
                    batchId,
                    id: uuid
                }
            });
        });
    },
};
//# sourceMappingURL=streams.js.map