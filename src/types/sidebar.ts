import { ListenableIframe, ListenableIframeParams } from "./listenableIframe"
import { RemovableWrapper } from "./wrapper"

type Translatable = {
    en: string;
    fr: string;
    [key: string]: string;
}

interface SidebarHeaderButtonProps {
    key: string;
    label?: Translatable;
    icon?: string;
}

export type SidebarHeaderButton = Required<SidebarHeaderButtonProps> & {
    children?: SidebarHeaderButtonProps[]
}

export type SidebarPanelOptions = ListenableIframeParams & {
    label: string;
    slug: string;
    secondaryLabel?: string;
    imageSource?: string;
    darkImageSource?: string;
    icon?: string;
    minimize?: boolean;
    onMinimize?: () => void;
    onClose?: () => void;
    onHeaderButtonClick?: (headerButton: SidebarHeaderButton) => void
    headerButtons?: SidebarHeaderButton[]
}

export type SidebarPanelWrapper = RemovableWrapper & ListenableIframe & {
    focus: () => void;
    close: () => void;
    setNotificationCount: (count: number) => void
    clearNotificationCount: () => void
}


