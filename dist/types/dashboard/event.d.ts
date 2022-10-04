export declare type DashboardEvent = {
    key: string;
    name: {
        en: string;
        [key: string]: string;
    };
    datatype: 'increment' | 'text' | 'array' | 'average';
    value: string | number | Record<string, unknown>;
};
