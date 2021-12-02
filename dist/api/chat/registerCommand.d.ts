/**
 *
 * Register a chat command in the commands menu. Can be used to execute action
 * involving the chat (sharing custom content, files, videos, etc)
 *
 * @example Chat.registerCommand({
 *   command: 'dm',
 *   label: 'Send a message',
 *   params: ['@name', 'message']
 *   onTrigger: (data) => console.log('someone sends a private message')
 * })
 *
 * @doc https://developers.livestorm.co/docs/chat#registercommand
 *
 */
export default function registerCommand({ label, command, params, onTrigger }: {
    label: string;
    command: string;
    params: Array<string>;
    onTrigger: (any: any) => unknown;
}): void;
