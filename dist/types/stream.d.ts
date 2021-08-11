export interface StreamOptions {
    template: string;
    variables: Record<string, unknown>;
    title: string;
    imageUrl: string;
}
export declare type Stream = {
    update: (params: StreamOptions) => void;
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
    immediateApply?: boolean;
    source?: 'plugin' | 'user';
};
