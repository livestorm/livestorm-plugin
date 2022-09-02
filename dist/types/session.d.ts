export interface Session {
    country?: string;
    ended_at?: string;
    estimated_started_at?: string;
    has_rtmp_channel?: boolean;
    id?: string;
    is_created_hls_in_progress?: boolean;
    is_live_concurrent?: boolean;
    is_next_upcoming?: boolean;
    is_on_demand?: boolean;
    is_replay_initializing?: boolean;
    name?: string;
    participants_count?: number;
    recording_status?: string;
    recording_status_type?: string;
    rtmp_to_hls_url?: string;
    rtmp_url?: string;
    start_requested_at?: string;
    started_at?: string;
    status_date?: string;
    timezone?: string;
    webrtc_limit?: number;
}
