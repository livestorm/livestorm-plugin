import { ListenableIframe, ListenableIframeParams } from "./listenableIframe"
import { RemovableWrapper } from "./wrapper"

export type SidebarPanelOptions = ListenableIframeParams & {
    label: string;
    imageSource?: string;
    darkImageSource?: string;
    icon?: string;
    slug: string;
    minimized?: boolean;
}

export type SidebarPanelWrapper = RemovableWrapper & ListenableIframe & {
    focus: () => void;
    close: () => void;
    onMinimize: (callback: () => void) => void;
}
