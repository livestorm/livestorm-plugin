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
    scope: null | 'contributors'
}

export type ChatMessageWithUser = Omit<ChatMessage, 'content'> & {
    user: {
        "first_name": string,
        "id": string,
        "last_name": string,
        "is_connected": boolean,
        "is_team_member": boolean,
        "is_guest_speaker": boolean,
    }
}

export interface ChatListenOptions {
    everyone?: boolean
}