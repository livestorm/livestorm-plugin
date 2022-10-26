import type { TrackingEvent } from '../../types/tracking/event';
/**
 *
 * Store a value under a specific key. This storage is persistant and shared across participants of the event
 *
 * @example Tracking.Event.track({
 *   key: 'emoji-reactions',
 *   value: 'joy'
 * })
 *
 * @doc https://developers.livestorm.co/docs/storage#setitem
 *
 */
export declare function track(options: TrackingEvent): Promise<Response>;
