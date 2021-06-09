export declare type Stream = {
    update: (params: {
        template: string;
        variables: Record<string, unknown>;
    }) => void;
    destroy: () => void;
};
export declare type CameraEffectWrapper = {
    sendMessage: (data: Record<string, unknown>) => void;
};
export declare type CameraEffectOptions = {
    label?: string;
    imageUrl?: string;
    disabled?: boolean;
    template?: string;
    variables?: Record<string, unknown>;
};
