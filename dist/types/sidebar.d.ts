import { ListenableIframe, ListenableIframeParams } from "./listenableIframe";
import { RemovableWrapper } from "./wrapper";
export declare type PanelOptions = ListenableIframeParams & {
    label: string;
    imageSource?: string;
    darkImageSource?: string;
    icon?: string;
    slug: string;
};
export declare type PanelWrapper = RemovableWrapper & ListenableIframe & {
    focus: () => void;
};
