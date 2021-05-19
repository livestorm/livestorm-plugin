/**
  * Be notified whenever someone posts a message in the chat.
  * May be used to create Chat bots, or forward messages to another API (slack, intercom, etc)
  *
  * @example Chat.listen(message => console.log(`Someone said ${message}`))
  *
  * @param callback - Function that will be called whenever the user posts a message
  * @param options - A hash of options
  *
*/
export default function Listen(callback: (message: any) => void, options?: {
    everyone?: boolean;
}): void;
