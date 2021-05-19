interface MessageParam {
    user: {
        id?: string;
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
  * @returns An instance of the created Message that you can use to delete the message or be notified whenever the HTML posts message
  *
*/
export default function Send(data: MessageParam): MessageInstance;
export {};
