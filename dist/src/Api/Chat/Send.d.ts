interface Message {
    id: String;
    destroy: () => void;
    onIframeMessage: (Function: any) => void;
}
export default function Send(data: any): Message;
export {};
