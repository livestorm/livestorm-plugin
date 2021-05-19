interface User {
    avatar: string;
    color: string;
    company_name: string;
    first_name: string;
    id: string;
    is_connected: Boolean;
    is_guest_speaker: Boolean;
    is_team_member: Boolean;
    is_host?: Boolean;
    job_title: string;
    last_name: string;
    pending: string;
    prepare: Boolean;
    prepare_enable_camera: Boolean;
    prepare_enable_microphone: Boolean;
}
export interface Users {
    /**
     * Returns the current user information
     *
     * @example await Livestorm.Users.me()
     *
     * @returns a promise that resolves with the user information as a hash
     *
     */
    me: () => Promise<User>;
    /**
     * Returns an array containing all the team members of the event
     *
     * @example await Livestorm.Users.teamMembers()
     *
     * @returns a promise that resolves with the users information as an array
     *
     */
    teamMembers: () => Promise<Array<User>>;
    /**
     * Returns an array containing all the currently connected people in the Room.
     * This list may change during the lifecycle of an event
     *
     * @example await Livestorm.Users.everyone()
     *
     * @returns a promise that resolves with the users information as an array
     *
     */
    everyone: () => Promise<Array<User>>;
}
declare const users: Users;
export default users;
