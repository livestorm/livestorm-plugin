interface User {
    avatar: String;
    color: String;
    company_name: String;
    first_name: String;
    id: String;
    is_connected: Boolean;
    is_guest_speaker: Boolean;
    is_team_member: Boolean;
    job_title: String;
    last_name: String;
    pending: String;
    prepare: Boolean;
    prepare_enable_camera: Boolean;
    prepare_enable_microphone: Boolean;
}
export interface Users {
    me: User;
    teamMembers: User;
    everyone: () => Promise<Array<User>>;
}
declare const users: Users;
export default users;
