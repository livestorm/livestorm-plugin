export type Stream = {
    update: (params: { template: string, variables: Record<string, unknown> }) => void,
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
}