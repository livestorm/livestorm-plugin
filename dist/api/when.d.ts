import { User } from '../types/user';
/**
 *
 * Be notified when the event ends.
 * The callback is not called if the user joins the event after the end.
 *
 * @example When.eventEnds(() => {
 *  // do something
 * })
 *
 * @doc https://developers.livestorm.co/docs/when#eventends
 *
 */
export declare function eventEnds(callback: (params: Record<string, unknown>) => void): void;
/**
 *
 * Be notified when the event starts.
 * The callback is not called if the user joins the event after the start.
 *
 * @example When.eventStarts(() => {
 *  // do something
 * })
 *
 * @doc https://developers.livestorm.co/docs/when#eventstarts
 *
 */
export declare function eventStarts(callback: (params: Record<string, unknown>) => void): void;
/**
 *
 * Be notified when someone enters the room.
 *
 * @example When.userJoins(() => {
 *  // do something
 * })
 *
 * @doc https://developers.livestorm.co/docs/when#userjoins
 *
 */
export declare function userJoins(callback: (params: {
    content: User;
}) => void): void;
/**
 *
 * Be notified when someone leaves the room.
 *
 * @example When.userJoins(() => {
 *  // do something
 * })
 *
 * @doc https://developers.livestorm.co/docs/when#userleaves
 *
 */
export declare function userLeaves(callback: (params: {
    content: User;
}) => void): void;
/**
 *
 * Be notified when the current user mutes/unmutes the notifications
 *
 * @example When.currentUserMutesNotifications( ({ muted }) => {
 *  // do something
 * })
 *
 * @doc https://developers.livestorm.co/docs/when#currentusermutesnotifications
 *
 */
export declare function currentUserMutesNotifications(callback: (mutes: {
    muted: boolean;
}) => void): void;
/**
 *
 * Be notified when the autoplay is allowed
 * Usefull to autoplay music or video with sound
 *
 * @example When.autoplayallowed( () => {
 *  // do something
 * })
 *
 * @doc https://developers.livestorm.co/docs/when#autoplayallowed
 *
 */
export declare function autoplayIsAllowed(callback: () => void): void;
