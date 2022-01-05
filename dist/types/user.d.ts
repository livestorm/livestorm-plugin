export interface User {
    avatar?: {
        size_120x120: {
            url: string;
        };
        size_60x60: {
            url: string;
        };
        url: string;
    };
    color?: string;
    company_name?: string;
    first_name?: string;
    id?: string;
    is_connected?: boolean;
    is_recorder?: boolean;
    is_guest_speaker?: boolean;
    is_team_member?: boolean;
    is_host?: boolean;
    job_title?: string;
    last_name?: string;
    pending?: string;
    email?: string;
    prepare?: boolean;
    prepare_enable_camera?: boolean;
    prepare_enable_microphone?: boolean;
}
