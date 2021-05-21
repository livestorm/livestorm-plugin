interface User {
    avatar: string;
    color: string;
    company_name: string;
    first_name: string;
    id: string;
    is_connected: boolean;
    is_guest_speaker: boolean;
    is_team_member: boolean;
    is_host?: boolean;
    job_title: string;
    last_name: string;
    pending: string;
    prepare: boolean;
    prepare_enable_camera: boolean;
    prepare_enable_microphone: boolean;
}
export default class {
    /**
    * Returns the current user information
    *
    * @example await Livestorm.Users.me()
    *
    * @returns a promise that resolves with the user information as a hash
    *
    */
    static me(): Promise<User>;
    /**
    * @example await Livestorm.Users.teamMembers()
    *
    * @example await Livestorm.Users.teamMembers()
    * @returns a promise that resolves with the users information as an array
    */
    static teamMembers(): Promise<User[]>;
    /**
    * Returns an array containing all the currently connected people in the Room.
    * This list may change during the lifecycle of an event
    *
    * @example await Livestorm.Users.everyone()
    *
    * @returns a promise that resolves with the users information as an array
    *
    */
    static everyone(): Promise<User[]>;
}
export {};
