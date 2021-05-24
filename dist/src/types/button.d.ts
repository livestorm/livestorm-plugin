export interface ShareButtonOptions {
    label: string;
    icon?: string;
    imageSource?: string;
    onClick: () => unknown;
}
export declare type StageButton = {
    remove: () => void;
};
export interface StageButtonOptions {
    label?: string;
    tooltip?: string;
    icon?: string;
    imageSource?: string;
    dropdownActions?: Array<{
        name?: string;
        label: string;
        imageSource?: string;
    }>;
    dropdownActionsTextClasses?: string;
    iframe?: {
        template: string;
        variables: Record<string, unknown>;
        width: number;
        height: number;
        onMessage?: (payload?: Record<string, unknown>) => unknown;
    };
    onClick?: (payload?: Record<string, unknown>) => unknown;
}
