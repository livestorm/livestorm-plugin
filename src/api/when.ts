import simpleCallbackHandler from '@/io/simpleCallbackHandler'
import { User } from '@/types/user'

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
export function eventEnds(callback: (params: Record<string, unknown>) => void): void {
  simpleCallbackHandler({
    action: 'event-ends',
    listener: 'event-ends-listener',
    callback
  })
}

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
export function eventStarts(callback: (params: Record<string, unknown>) => void): void {
  simpleCallbackHandler({
    action: 'event-starts',
    listener: 'event-starts-listener',
    callback
  })
}

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
export function userJoins(callback: (params: { content: User }) => void): void {
  simpleCallbackHandler({ action: 'user-joins', callback })
}

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
export function userLeaves(callback: (params: { content: User }) => void): void {
  simpleCallbackHandler({ action: 'user-leaves', callback })
}

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
export function currentUserMutesNotifications(callback: (mutes: { muted: boolean }) => void): void {
  simpleCallbackHandler({
    action: 'current-user-mutes-notifications',
    listener: 'current-user-mutes-notifications-listener',
    callback
  })
}


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
export function autoplayIsAllowed(callback: () => void): void {
  simpleCallbackHandler({
    action: 'autoplay-is-allowed',
    listener: 'autoplay-is-allowed-listener',
    callback
  })
}
