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
  onIframeMessage: (Function) => void
}

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
    }
  }
}
