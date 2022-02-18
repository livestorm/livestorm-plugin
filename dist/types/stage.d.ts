import { ListenableIframe, ListenableIframeParams } from "./listenableIframe";
import { RemovableWrapper } from "./wrapper";
export declare type StageCustomContentOptions = ListenableIframeParams & {
    position?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
    margin?: {
        top?: number | 'auto';
        right?: number | 'auto';
        bottom?: number | 'auto';
        left?: number | 'auto';
    };
    wrap?: boolean;
};
export declare type StageCustomContentWrapper = ListenableIframe & RemovableWrapper & {
    hide: () => void;
    show: () => void;
};
