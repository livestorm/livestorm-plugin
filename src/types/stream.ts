export interface StreamOptions {
    template: string,
    variables: Record<string, unknown>,
    title: string;
    imageUrl: string;
}

export type Stream = {
    update: (params: StreamOptions) => void,
    destroy: () => void,
}

export type CameraEffectWrapper = {
    sendMessage: (data: Record<string, unknown>) => void,
}

export type CameraEffectOptions = {
    label?: string,
    imageUrl?: string,
    disabled?: boolean,
    template?: string,
    variables?: Record<string, unknown>,
    immediateApply?: boolean,
    source?: 'plugin' | 'user',
}

