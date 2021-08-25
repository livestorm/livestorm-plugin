import { PublishedMessage } from '../../types/pubSub';
/**
 *
 * Publish an event to any connected Subscriber via websockets.
 * Can be used to communicate to other people in the Room for use cases such as :
 * chat, dynamic content, video games, breakout rooms, polls, etc.
 *
 * Subscribers are not shared between rooms.
 *
 * @example PubSub.publish('say-hello', { data: { custom: 'payload' }})
 *
 * @doc https://developers.livestorm.co/docs/pubsub#publish
 *
 */
export default function Publish(event: string, data: PublishedMessage): void;
