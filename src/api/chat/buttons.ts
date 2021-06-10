import { DefaultButtonOptions } from '@/types/button'

import addButtonDefaultListeners from '@/io/addButtonDefaultListeners'

/** Register an entry in the Share menu of the chat.
 *  Can be used to trigger any action (sharing custom content, files, videos, etc)
 * 
 * @exemple Buttons.registerChatShareButton({
 *   label: 'Share a Document',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 * 
 * @param options - DefaultButtonOptions
 */
export function registerChatShareButton(options: DefaultButtonOptions): void {
  addButtonDefaultListeners('chat-register-share-button', options)
}