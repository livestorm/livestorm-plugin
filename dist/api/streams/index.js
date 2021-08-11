"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buttons = exports.registerMultipleCameraEffects = exports.registerCameraEffect = exports.addStream = void 0;
const uuid_1 = require("uuid");
const sendEvent_1 = require("../../io/sendEvent");
const processTemplate_1 = require("../../io/processTemplate");
const subscribeToEvent_1 = require("../../io/subscribeToEvent");
const createStream = (id) => ({
    /**
     * Update the content of a stream
     *
     * @doc https://developers.livestorm.co/docs/streams#stream
     *
     */
    update(params) {
        sendEvent_1.default({
            action: 'update-stream',
            data: { template: processTemplate_1.default(params.template, params.variables), id }
        });
    },
    /**
     *
     * Remove the stream from the stage
     *
     * @doc https://developers.livestorm.co/docs/streams#stream
     *
     */
    destroy() {
        sendEvent_1.default({
            action: 'remove-stream',
            data: { id }
        });
    }
});
const createCameraEffectWrapper = (id) => ({
    /**
     *
     * Send a message to the camera effect.
     * Can be catched via a window.addEventListener('message', () => {}).
     *
     * @doc https://developers.livestorm.co/docs/streams#cameraeffectwrapper
     *
     */
    sendMessage(data) {
        sendEvent_1.default({
            action: 'camera-effect-wrapper-send-message',
            data: { data, id }
        });
    }
});
/**
 *
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
 * @doc https://developers.livestorm.co/docs/streams#addstream
 *
 * @beta
 *
 */
function addStream(data) {
    return new Promise((resolve) => {
        const uuid = uuid_1.v4();
        subscribeToEvent_1.default(`stream-message-for-${uuid}`, (response) => data.onMessage(response));
        sendEvent_1.default({
            action: 'add-stream',
            data: { template: processTemplate_1.default(data.template, data.variables), id: uuid, title: data.title, imageUrl: data.imageUrl }
        });
        resolve(createStream(uuid));
    });
}
exports.addStream = addStream;
/**
 *
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
 * @doc https://developers.livestorm.co/docs/streams#registercameraeffect
 *
 * @see https://webrtc.github.io/samples/src/content/capture/canvas-pc/
 * @beta
 *
 */
function registerCameraEffect(data) {
    const uuid = uuid_1.v4();
    sendEvent_1.default({
        action: 'stream-register-camera-effect',
        data: {
            label: data.label,
            imageUrl: data.imageUrl,
            disabled: !!data.disabled,
            template: processTemplate_1.default(data.template, data.variables),
            immediateApply: data.immediateApply,
            source: data.source,
            id: uuid
        }
    });
    return createCameraEffectWrapper(uuid);
}
exports.registerCameraEffect = registerCameraEffect;
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
 * @doc https://developers.livestorm.co/docs/streams#registermultiplecameraeffects
 *
 * @beta
 *
 */
function registerMultipleCameraEffects(data) {
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
    return createCameraEffectWrapper(batchId);
}
exports.registerMultipleCameraEffects = registerMultipleCameraEffects;
exports.Buttons = require("./buttons");
//# sourceMappingURL=index.js.map