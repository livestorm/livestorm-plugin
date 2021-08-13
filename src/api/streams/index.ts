import { Stream, StreamOptions, CameraEffectWrapper, CameraEffectOptions } from '@/types/stream'

import { v4 as uuidv4 } from 'uuid'
import sendEvent from '@/io/sendEvent'
import processTemplate from '@/io/processTemplate'
import subscribeToEvent from '@/io/subscribeToEvent'

const createStream = (id: string): Stream => ({
  /**
   * Update the content of a stream
   *
   * @doc https://developers.livestorm.co/docs/streams#stream
   * 
   */
  update(params) {
    sendEvent({
      action: 'update-stream',
      data: { template: processTemplate(params.template, params.variables), id }
    })
  },


  /**
   * 
   * Remove the stream from the stage
   * 
   * @doc https://developers.livestorm.co/docs/streams#stream
   * 
   */
  destroy() {
    sendEvent({
      action: 'remove-stream',
      data: { id }
    })
  }
})

const createCameraEffectWrapper = (id: string): CameraEffectWrapper => ({
  /**
   * 
   * Send a message to the camera effect.
   * Can be catched via a window.addEventListener('message', () => {}).
   * 
   * @doc https://developers.livestorm.co/docs/streams#cameraeffectwrapper
   * 
   */
  sendMessage(data: Record<string, unknown>) {
    sendEvent({
      action: 'camera-effect-wrapper-send-message',
      data: { data, id }
    })
  }
})

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
export function addStream(data: StreamOptions & { onMessage: (arg: unknown) => unknown }): Promise<Stream> {
  return new Promise((resolve) => {
    const uuid = uuidv4()

    subscribeToEvent(`stream-message-for-${uuid}`, (response) => data.onMessage(response))
    sendEvent({
      action: 'add-stream',
      data: { template: processTemplate(data.template, data.variables), id: uuid, title: data.title, imageUrl: data.imageUrl }
    })

    resolve(createStream(uuid))
  })
}

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
export function registerCameraEffect(data: CameraEffectOptions): CameraEffectWrapper {
  const uuid = uuidv4()

  sendEvent({
    action: 'stream-register-camera-effect',
    data: {
      label: data.label,
      imageUrl: data.imageUrl,
      disabled: !!data.disabled,
      template: processTemplate(data.template, data.variables),
      immediateApply: data.immediateApply,
      source: data.source,
      id: uuid
    }
  })

  return createCameraEffectWrapper(uuid)
}

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
export function registerMultipleCameraEffects(data: {
    template: string,
    disabled?: boolean,
    effects: CameraEffectOptions[]
  }): CameraEffectWrapper {
  const batchId = uuidv4()
    
  data.effects.forEach((effect) => {
    const uuid = uuidv4()
    sendEvent({
      action: 'stream-register-camera-effect',
      data: {
        label: effect.label,
        imageUrl: effect.imageUrl,
        disabled: !!data.disabled,
        template: processTemplate(data.template, effect.variables),
        variables: effect.variables,
        isMultiple: true,
        batchId,
        id: uuid
      }
    })
  })

  return createCameraEffectWrapper(batchId)
}

export * as Buttons from './buttons'
