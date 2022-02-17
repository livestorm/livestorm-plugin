import { ListenableIframeParams } from "./listenableIframe"

export type StageHTMLContentOptions =  ListenableIframeParams & {
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