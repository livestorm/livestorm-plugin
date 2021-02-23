import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../IO/sendEvent'
import processTemplate from '../IO/processTemplate'
import subscribeToEvent from '../IO/subscribeToEvent'

const createStream = (id) => ({
  /**
    * Update the content of a stream
    *
    * @param template - The HTML document
    * @param variables - A hash of variables that you want to interpolate within the document
    * 
  */
  update(params) {
    sendEvent({
      action: 'update-stream',
      data: { template: processTemplate(params.template, params.variables), id }
    })
  },


  /**
    * Remove the stream from the stage
    * 
  */
  destroy() {
    sendEvent({
      action: 'remove-stream',
      data: { id }
    })
  }
})

export default {
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
  addStream(data: { template: string, variables: any, onMessage: Function }) {
    return new Promise((resolve) => {
      const uuid = uuidv4()

      subscribeToEvent(`stream-message-for-${uuid}`, (response) => data.onMessage(response))
      sendEvent({
        action: 'add-stream',
        data: { template: processTemplate(data.template, data.variables), id: uuid }
      })

      resolve(createStream(uuid))
    })
  }
}