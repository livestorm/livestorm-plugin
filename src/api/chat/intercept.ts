import { ChatMessage } from '@/types/chat'

import { v4 as uuidv4 } from 'uuid'
import sendEvent from '@/io/sendEvent'
import subscribeToEvent from '@/io/subscribeToEvent'

/**
 * 
 * Intercept Chat messages matching a specific regex.
 * Once intercepted, the message will not be displayed in the chat.
 * Useful to filter language or create custom chat commands.
 *
 * @example Chat.intercept(/lol/, (message) => console.log(`someone said ${message}`))
 *
 * @doc https://developers.livestorm.co/docs/chat#intercept
 * 
 */
export default function Intercept(matcher: RegExp, callback: (message: ChatMessage) => void): void {
  const uuid = uuidv4()
  sendEvent({
    action: 'chat-intercept',
    data:  { id: uuid, matcher: matcher.source }
  })

  subscribeToEvent<ChatMessage>(`chat-intercepter-${uuid}`, (data) => callback(data))
}
