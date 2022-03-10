import { ListenableIframe, ListenableIframeParams } from "./listenableIframe";
import { RemovableWrapper } from "./wrapper";
export declare type StageCustomContentOptions = ListenableIframeParams & {
    position?: {
        top?: 0 | string;
        right?: 0 | string;
        bottom?: 0 | string;
        left?: 0 | string;
    };
    size: {
        width: string;
        height: string;
    };
    widget?: boolean;
    onClose?: () => void;
};
export declare type StageCustomContentWrapper = ListenableIframe & RemovableWrapper & {
    hide: () => void;
    show: () => void;
};
