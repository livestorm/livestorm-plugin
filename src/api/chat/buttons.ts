import { DefaultButtonOptions } from '@/types/button'

import addButtonDefaultListeners from '@/io/addButtonDefaultListeners'

/** Register an entry in the Share menu of the chat.
 *  Can be used to trigger any action (sharing custom content, files, videos, etc)
 * 
 * @example Chat.Buttons.registerChatShareButton({
 *   label: 'Share a Document',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 * 
 * @doc https://developers.livestorm.co/docs/chat#registersharebutton
 */
export function registerChatShareButton(options: DefaultButtonOptions): void {
  addButtonDefaultListeners('chat-register-share-button', options)
}