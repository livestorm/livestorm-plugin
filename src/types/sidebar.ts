import { ListenableIframe, ListenableIframeParams } from "./listenableIframe"
import { RemovableWrapper } from "./wrapper"

export type SidebarPanelOptions = ListenableIframeParams & {
    label: string;
    secondaryLabel?: string;
    imageSource?: string;
    darkImageSource?: string;
    icon?: string;
    slug: string;
    minimize?: boolean;
    onMinimize?: () => void;
    onClose?: () => void;
}

export type SidebarPanelWrapper = RemovableWrapper & ListenableIframe & {
    focus: () => void;
    close: () => void;
    setNotificationCount: (count: number) => void
    clearNotificationCount: () => void
}
