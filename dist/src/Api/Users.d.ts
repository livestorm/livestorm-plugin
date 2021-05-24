import { User } from '@/types/user';
declare const _default: {
    /**
    * Returns the current user information
    *
    * @example await Livestorm.Users.me()
    *
    * @returns a promise that resolves with the user information as a hash
    *
    */
    me(): Promise<User>;
    /**
    * @example await Livestorm.Users.teamMembers()
    *
    * @example await Livestorm.Users.teamMembers()
    * @returns a promise that resolves with the users information as an array
    */
    teamMembers(): Promise<User[]>;
    /**
    * Returns an array containing all the currently connected people in the Room.
    * This list may change during the lifecycle of an event
    *
    * @example await Livestorm.Users.everyone()
    *
    * @returns a promise that resolves with the users information as an array
    *
    */
    everyone(): Promise<User[]>;
};
export default _default;
