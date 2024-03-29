import { ChatMessage, ChatMessageWithUser, ChatListenOptions } from '@/types/chat'

import { v4 as uuidv4 } from 'uuid'
import sendEvent from '@/io/sendEvent'
import subscribeToEvent from '@/io/subscribeToEvent'

/**
 * 
 * Be notified whenever someone posts a message in the chat.
 * May be used to create Chat bots, or forward messages to another API (slack, intercom, etc)
 *
 * @example Chat.listen(message => console.log(`Someone said ${message}`))
 *
 * @doc https://developers.livestorm.co/docs/chat#listen
 * 
 */


export default function Listen<U extends ChatListenOptions, T extends (U extends { everyone: true} ? ChatMessageWithUser : ChatMessage)>(callback: (message: T) => void, options?: U): void {
  const uuid = uuidv4()
  sendEvent({
    action: `chat-listen${options?.everyone ? '-everyone' : '' }`,
    data:  { id: uuid }
  })


  subscribeToEvent<T>(`chat-listener-${options?.everyone ? 'everyone-' : '' }${uuid}`, (data) => callback(data))
}