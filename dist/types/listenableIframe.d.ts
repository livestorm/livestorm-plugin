export declare type ListenableIframe = {
    sendMessage: (data: Record<string, unknown>) => void;
    getId: () => string;
};
export declare type ListenableIframeParams = {
    template: string;
    variables?: Record<string, unknown>;
    onMessage?: (arg: unknown) => unknown;
};
