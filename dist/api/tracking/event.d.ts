import type { TrackingEvent } from '../../types/tracking/event';
/**
 *
 * Track an event to make it visible in the dashboard
 *
 * @example Tracking.Event.track({
 *   key: 'emoji-reactions',
 *   value: 'joy'
 * })
 *
 * @doc https://developers.livestorm.co/docs/tracking#track
 *
 */
export declare function track<T extends string | number | Record<string, unknown>>(options: TrackingEvent<T>): Promise<Response>;
