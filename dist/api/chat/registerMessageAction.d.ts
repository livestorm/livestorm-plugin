/**
 *
 * Register an entry in the context menu of a chat message.
 * Can be used to trigger any action (sharing custom content, files, videos, etc)
 *
 * @example Chat.registerMessageAction({
 *   label: 'Send a message',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 *
 * @doc https://developers.livestorm.co/docs/chat#registermessageaction
 *
 */
export default function registerMessageAction({ label, icon, imageSource, onClick }: {
    label: string;
    icon?: string;
    imageSource?: string;
    onClick: (any: any) => unknown;
}): void;
