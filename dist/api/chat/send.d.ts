interface MessageParam {
    user: {
        id?: string;
        color?: string;
        firstName?: string;
        lastName?: string;
        tag?: string;
        avatarUrl?: string;
    };
    text?: string;
    html?: string;
}
interface MessageInstance {
    id: string;
    destroy: () => void;
    onIframeMessage: (Function: any) => void;
    sendMessage: (any: any) => void;
}
/**
 *
 * Adds a message in the chat.
 * Message will be sent locally to the connected user
 *
 * @example Chat.send({
 *   user: {
 *     firstName: 'Michael'
 *   },
 *   text: 'Hello world',
 *   html: '<p>Hi</p>'
 * })
 *
 * @doc https://developers.livestorm.co/docs/chat#send
 *
 */
export default function Send(data: MessageParam): MessageInstance;
export {};
