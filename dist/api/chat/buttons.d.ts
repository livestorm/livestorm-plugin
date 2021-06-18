import { DefaultButtonOptions } from '../../types/button';
/** Register an entry in the Share menu of the chat.
 *  Can be used to trigger any action (sharing custom content, files, videos, etc)
 *
 * @example Chat.Buttons.registerChatShareButton({
 *   label: 'Share a Document',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 *
 * @param options - DefaultButtonOptions
 */
export declare function registerChatShareButton(options: DefaultButtonOptions): void;
