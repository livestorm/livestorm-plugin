export default function simpleCallbackHandler<T extends Record<string, unknown>>({ action, listener, callback }: {
    action: string;
    listener?: string;
    callback: (data: T) => void;
}): void;
