interface MessageParam {
    user: {
        id?: String;
        firstName?: String;
        lastName?: String;
        tag?: String;
        avatarUrl?: String;
    };
    text?: String;
    html?: String;
}
interface MessageInstance {
    id: String;
    destroy: () => void;
    onIframeMessage: (Function: any) => void;
}
/**
  * Send a message in the chat.
  * By default message will be sent locally to the connected user
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
