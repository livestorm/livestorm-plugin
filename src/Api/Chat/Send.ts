import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../../IO/sendEvent'
import subscribeToEvent from '../../IO/subscribeToEvent'

interface MessageParam {
  user: {
    id?: String,
    firstName?: String,
    lastName?: String,
    tag?: String,
    avatarUrl?: String
  },
  text?: String,
  html?: String
}

interface MessageInstance {
  id: String,
  destroy: () => void,
  onIframeMessage: (Function) => void,
  sendMessage: (any) => void
}

/**
  * Adds a message in the chat.
  * Message will be sent locally to the connected user
  *
  * @example Chat.send({
  *   user: {
  *     firstName: 'Michael'
  *   },
  *   text: 'Hello world',
  *   html: '<p>Hi</p>'
  * })
  * @returns An instance of the created Message that you can use to delete the message or be notified whenever the HTML posts message
  * 
*/
export default function Send(data: MessageParam): MessageInstance {
  const id = uuidv4()
  sendEvent({
    action: 'chat-send',
    data: {
      id,
      ...data
    }
  })

  return {
    id,
    destroy() {
      sendEvent({
        action: `chat-delete-${id}`,
        data: {
          id,
          ...data
        }
      })
    },
    onIframeMessage(callback) {
      subscribeToEvent(`iframe-message-for-${id}`, (response) => callback(response))
    },
    /**
      * Send a message to the iframe.
      * Can be catched via a window.addEventListener('message', () => {}).
      * 
      * @param data - Any data you want to send to the iframe
      * 
      */
    sendMessage(data) {
      sendEvent({
        action: `iframe-message-to-${id}`,
        data: { data, id }
      })
    }
  }
}
