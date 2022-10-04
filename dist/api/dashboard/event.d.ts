import type { DashboardEvent } from '../../types/dashboard/event';
/**
 *
 * Store a value under a specific key. This storage is persistant and shared across participants of the event
 *
 * @example Dashboard.Event.track({
 *   name: {
 *     en: '# of emoji reactions',
 *     fr: '# de réactions emoji',
 *   },
 *   key: 'nb-of-emoji-reactions',
 *
 * })
 *
 * @doc https://developers.livestorm.co/docs/storage#setitem
 *
 */
export declare function track(options: DashboardEvent): Promise<Response>;
