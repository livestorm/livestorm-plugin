export declare type AugmentedVariableValue = {
    value: unknown;
    inject: boolean;
    replace: boolean;
};
export declare type VariableValue = AugmentedVariableValue | unknown;
export declare type ListenableIframe = {
    sendMessage: (data: Record<string, unknown>) => void;
    getId: () => string;
};
export declare type ListenableIframeParams = {
    template: string;
    variables?: Record<string, VariableValue>;
    onMessage?: (arg: unknown) => unknown;
};
