import { User } from '../types/user';
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
