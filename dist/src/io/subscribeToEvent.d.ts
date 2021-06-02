export default function subscribeToEvent<T extends Record<string, unknown>>(eventName: string, callback: (data: T) => void): void;
