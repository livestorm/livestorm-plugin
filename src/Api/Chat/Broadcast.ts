import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../../IO/sendEvent'
import subscribeToEvent from '../../IO/subscribeToEvent'

interface BroadcastedMessageInstance {
  id: String,
  onIframeMessage: (Function) => void
}

/**
  * Broadcasts a message in the chat.
  * Message will be displayed to all the recipients of the chat
  *
  * @example Chat.broadcast({
  *   text: 'Hello world',
  *   html: '<p>Hi</p>'
  * })
  * @returns An instance of the created Message that you can use to delete the message or be notified whenever the HTML posts message
  * 
*/
export default function Send(data: { text: string, html: string}): BroadcastedMessageInstance {
  const id = uuidv4()
  sendEvent({
    action: 'chat-broadcast',
    data: {
      id,
      ...data
    }
  })

  return {
    id,
    onIframeMessage(callback) {
      subscribeToEvent(`iframe-message-for-${id}`, (response) => callback(response))
    }
  }
}
