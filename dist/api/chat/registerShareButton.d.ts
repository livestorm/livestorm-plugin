import { ShareButtonOptions } from '../../types/button';
/**
  * Register an entry in the Share menu of the chat.
  * Can be used to trigger any action (sharing custom content, files, videos, etc)
  *
  * @example Chat.registerShareButton({
  *   label: 'Share a Document',
  *   imageSource: 'http://image/image.png',
  *   onClick: () => console.log('someone clicked this button')
  * })
  *
  * @param label - The label of the action
  * @param icon - An icon from the https://feathericons.com library (not recommended)
  * @param imageSource - URL of an icon (png, svg) that will be displayed next to your button
  * @param onClick - Function called whenever someone clicks on your button
  *
*/
export default function registerShareButton({ label, icon, imageSource, onClick }: ShareButtonOptions): void;
