import { Stream, CameraEffectWrapper, CameraEffectOptions } from '../../types/stream';
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
export declare function addStream(data: {
    template: string;
    variables: Record<string, unknown>;
    onMessage: (arg: unknown) => unknown;
}): Promise<Stream>;
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
export declare function registerCameraEffect(data: CameraEffectOptions): CameraEffectWrapper;
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
export declare function registerMultipleCameraEffects(data: {
    template: string;
    disabled?: boolean;
    effects: CameraEffectOptions[];
}): CameraEffectWrapper;
export * as Buttons from './buttons';
