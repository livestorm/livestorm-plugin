interface BroadcastedMessageInstance {
    id: String;
    onIframeMessage: (Function: any) => void;
}
/**
  * Broadcasts a message in the chat.
  * Message will be displayed to all the recipients of the chat
  *
  * @example Chat.broadcast({
  *   text: 'Hello world',
  *   html: '<p>Hi</p>'
  * })
  * @returns An instance of the created Message that you can use to delete the message or be notified whenever the HTML posts message
  *
*/
export default function Broadcast(data: {
    text?: string;
    html?: string;
}): BroadcastedMessageInstance;
export {};
