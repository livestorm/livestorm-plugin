import { v4 as uuidv4 } from 'uuid';
import sendEvent from '@/io/sendEvent'
import subscribeToEvent from '@/io/subscribeToEvent'

/**
  * Be notified whenever someone posts a message in the chat.
  * May be used to create Chat bots, or forward messages to another API (slack, intercom, etc)
  *
  * @example Chat.listen(message => console.log(`Someone said ${message}`))
  *
  * @param callback - Function that will be called whenever the user posts a message
  * 
*/
export default function Listen(callback: (message: Record<string, unknown>) => void): void {
  const uuid = uuidv4()
  sendEvent({
    action: 'chat-listen',
    data:  { id: uuid }
  })

  subscribeToEvent(`chat-listener-${uuid}`, (data) => callback(data))
}