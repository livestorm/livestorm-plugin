export declare type PublishedMessage = {
    data: Record<string, unknown>;
    scope?: 'event' | 'session' | 'organization';
};
