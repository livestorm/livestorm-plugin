import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../../IO/sendEvent'
import subscribeToEvent from '../../IO/subscribeToEvent'

export default function Intercept(matcher: RegExp, callback: (message: any) => Boolean) {
  const uuid = uuidv4()
  sendEvent({
    action: 'chat-intercept',
    data:  { id: uuid, matcher: matcher.source }
  })

  subscribeToEvent(`chat-intercepter-${uuid}`, (data) => callback(data))
}