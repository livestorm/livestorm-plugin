export default function sendEvent<T extends Record<string, unknown>>(payload: {
    action: string;
    data: T;
}): void;
