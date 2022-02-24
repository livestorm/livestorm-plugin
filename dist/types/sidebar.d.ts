import { ListenableIframe, ListenableIframeParams } from "./listenableIframe";
import { RemovableWrapper } from "./wrapper";
export declare type SidebarPanelOptions = ListenableIframeParams & {
    label: string;
    imageSource?: string;
    darkImageSource?: string;
    icon?: string;
    slug: string;
};
export declare type SidebarPanelWrapper = RemovableWrapper & ListenableIframe & {
    focus: () => void;
    close: () => void;
    setNotificationCount: (count: number) => void;
    clearNotificationCount: () => void;
};
