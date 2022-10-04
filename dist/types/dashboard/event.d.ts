export declare type DashboardEvent = {
    key: string;
    name: {
        en: string;
        [key: string]: any;
    };
    datatype: 'increment' | 'text' | 'array' | 'average';
    value: string | number | {
        [key: string]: any;
    };
};
