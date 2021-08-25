import { PublishedMessage } from '../../types/pubSub';
/**
 *
 * Publish an event to any connected Subscriber via websockets.
 * Can be used to communicate to other people in the Room for use cases such as :
 * chat, dynamic content, video games, breakout rooms, polls, etc.
 *
 * By default, messages are published only to the ongoing session.
 * The scope param allows you to publish messages to other sessions,
 * or even to the entire organization.
 * In any cases, messages remain scoped to your plugin, meaning they can only be caught by your plugin.
 *
 * @example PubSub.publish('say-hello', { data: { custom: 'payload' }})
 *
 * @doc https://developers.livestorm.co/docs/pubsub#publish
 *
 */
export default function Publish(event: string, data: PublishedMessage): void;
