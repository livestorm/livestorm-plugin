import { User } from '../types/user';
import { DefaultButtonOptions } from '../types/button';
/**
  * Returns the current user information
  *
  * @example await Livestorm.Users.me()
  *
  * @returns a promise that resolves with the user information as a hash
  *
  */
export declare function me(): Promise<User>;
/**
  * Returns an array containing all the team members of the event
  *
  * @example await Livestorm.Users.teamMembers()
  * @returns a promise that resolves with the users information as an array
  */
export declare function teamMembers(): Promise<User[]>;
/**
  * Returns an array containing all the currently connected people in the Room.
  * This list may change during the lifecycle of an event
  *
  * @example await Livestorm.Users.everyone()
  *
  * @returns a promise that resolves with the users information as an array
  *
  */
export declare function everyone(): Promise<User[]>;
/**
  * Returns the number of the connected users
  *
  * @example await Livestorm.Users.connectedCount()
  * @returns a promise that resolves with the number of the connected users
  */
export declare function connectedCount(): Promise<number>;
/**
 *
 * Register an entry in the context menu of a user in the people tab.
 * Can be used to trigger any action (sharing custom content, files, videos, etc)
 *
 * @example Users.registerPeopleTabAction({
 *   label: 'Send a private message',
 *   imageSource: 'http://image/image.png',
 *   onClick: (user) => console.log('someone clicked this button')
 * })
 *
 * @doc https://developers.livestorm.co/docs/users#registerpeopletabaction
 *
 */
export declare function registerPeopleTabAction(options: DefaultButtonOptions & {
    actionScope: 'chat' | 'qa' | 'people' | 'polls';
}): void;
