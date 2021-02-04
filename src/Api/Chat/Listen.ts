import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../../IO/sendEvent'
import subscribeToEvent from '../../IO/subscribeToEvent'

export default function Listen(callback: (message: any) => Boolean) {
  const uuid = uuidv4()
  sendEvent({
    action: 'chat-listen',
    data:  { id: uuid }
  })

  subscribeToEvent(`chat-listener-${uuid}`, (data) => callback(data))
}