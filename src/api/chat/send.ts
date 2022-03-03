import { v4 as uuidv4 } from 'uuid'
import sendEvent from '@/io/sendEvent'
import subscribeToEvent from '@/io/subscribeToEvent'

interface MessageParam {
  user: {
    id?: string,
    color?: string,
    firstName?: string,
    lastName?: string,
    tag?: string,
    avatarUrl?: string
  },
  visibility?: string,
  text?: string,
  html?: string
}

interface MessageInstance {
  id: string,
  destroy: () => void,
  onIframeMessage: (Function) => void,
  sendMessage: (any) => void,
  onDelete: (callback: () => void) => void
}

/**
 * 
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
 * 
 * @doc https://developers.livestorm.co/docs/chat#send
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
        action: 'chat-delete',
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
    },

    onDelete(callback) {
      subscribeToEvent(`chat-message-deleted-${id}`, () => callback())
    },
  }
}
