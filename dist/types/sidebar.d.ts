import { ListenableIframe, ListenableIframeParams } from "./listenableIframe";
import { RemovableWrapper } from "./wrapper";
declare type Translatable = {
    en: string;
    fr: string;
    [key: string]: string;
};
export declare type SidebarHeaderButton = {
    label: Translatable;
    icon: string;
};
export declare type SidebarPanelOptions = ListenableIframeParams & {
    label: string;
    slug: string;
    secondaryLabel?: string;
    imageSource?: string;
    darkImageSource?: string;
    icon?: string;
    minimize?: boolean;
    onMinimize?: () => void;
    onClose?: () => void;
    onHeaderButtonClick?: (headerButton: SidebarHeaderButton) => void;
    headerButtons?: SidebarHeaderButton[];
};
export declare type SidebarPanelWrapper = RemovableWrapper & ListenableIframe & {
    focus: () => void;
    close: () => void;
    setNotificationCount: (count: number) => void;
    clearNotificationCount: () => void;
};
export {};
