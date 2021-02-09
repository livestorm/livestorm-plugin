interface MessageParam {
    user: {
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
export default function Send(data: MessageParam): MessageInstance;
export {};
