import { ListenableIframe, ListenableIframeParams } from "./listenableIframe"
import { RemovableWrapper } from "./wrapper"

export type SidebarPanelOptions = ListenableIframeParams & {
    label: string;
    imageSource?: string;
    darkImageSource?: string;
    icon?: string;
    slug: string;
    minimized?: boolean;
    onMinimize?: () => void;
}

export type SidebarPanelWrapper = RemovableWrapper & ListenableIframe & {
    focus: () => void;
    close: () => void;
}
