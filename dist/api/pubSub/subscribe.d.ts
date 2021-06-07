/**
  * Subscribe to a Published event.
  * Can be used to trigger any action whenever an event is Published in use cases such as :
  * chat, dynamic content, video games, breakout rooms, polls, etc.
  *
  *
  * @example PubSub.subscribe('say-hello', (message) => {})
  *
  * @param eventName - The name of the event you want to subscribe to.
  * @param onEventReceived - Callback called whenever a published event matches the eventName
  *
  *
*/
export default function Subscribe(eventName: string, onEventReceived: (message: Record<string, unknown>) => void): void;