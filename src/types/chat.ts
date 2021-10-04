export type BroadcastedMessage = {
    id: string,
    onIframeMessage: (arg: (data: Record<string, unknown>) => void) => void,
    sendMessage: (data: Record<string, unknown>) => void 
}

export interface BroadcastMessageOptions {
    text?: string,
    html?: string
}

export type ChatMessage = {
    content: string;
}