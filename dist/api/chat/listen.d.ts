import { ChatMessage, ChatMessageWithUser, ChatListenOptions } from '../../types/chat';
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
export default function Listen<U extends ChatListenOptions, T extends (U extends {
    everyone: true;
} ? ChatMessageWithUser : ChatMessage)>(callback: (message: T) => void, options?: U): void;
