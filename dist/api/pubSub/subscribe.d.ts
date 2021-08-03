/**
 *
 * Subscribe to a Published event.
 * Can be used to trigger any action whenever an event is Published in use cases such as :
 * chat, dynamic content, video games, breakout rooms, polls, etc.
 *
 *
 * @example PubSub.subscribe('say-hello', (message) => {})
 *
 * @doc https://developers.livestorm.co/docs/pubsub#subscribe
 *
 */
export default function Subscribe(eventName: string, onEventReceived: (message: Record<string, unknown>) => void): void;
