import { ListenableIframe, ListenableIframeParams } from "./listenableIframe"
import { RemovableWrapper } from "./wrapper"

export type StageCustomContentOptions =  ListenableIframeParams & {
    position?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    },
    margin?: {
        top?: number | 'auto';
        right?: number | 'auto';
        bottom?: number | 'auto';
        left?: number | 'auto';
    },
    wrap?: boolean,
}

export type StageCustomContentWrapper = ListenableIframe & RemovableWrapper & {
    hide: () => void,
    show: () => void,
}
