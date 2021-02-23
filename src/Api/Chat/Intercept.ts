import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../../IO/sendEvent'
import subscribeToEvent from '../../IO/subscribeToEvent'

/**
  * Intercept Chat messages matching a specific regex.
  * Once intercepted, the message will not be displayed in the chat.
  * Useful to filter language or create custom chat commands.
  *
  * @example Chat.intercept(/lol/, (message) => console.log(`someone said ${message}`))
  *
  * @param matcher - A regular expression that represents the messages to be intercepted
  * @param callback - A function that will be called whenever a message matches your criteria
  * 
*/
export default function Intercept(matcher: RegExp, callback: (message: any) => void) {
  const uuid = uuidv4()
  sendEvent({
    action: 'chat-intercept',
    data:  { id: uuid, matcher: matcher.source }
  })

  subscribeToEvent(`chat-intercepter-${uuid}`, (data) => callback(data))
}