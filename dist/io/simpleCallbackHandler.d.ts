export default function simpleCallbackHandler<T extends Record<string, unknown>>({ action, listener, callback, data }: {
    action: string;
    listener?: string;
    data?: Record<string, unknown>;
    callback: (data: T) => void;
}): void;
