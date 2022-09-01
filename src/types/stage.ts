import { ListenableIframe, ListenableIframeParams } from "./listenableIframe"
import { RemovableWrapper } from "./wrapper"

export type StageCustomContentOptions = ListenableIframeParams & {
    position?: {
        top?: 0 | string;
        right?: 0 | string;
        bottom?: 0 | string;
        left?: 0 | string;
    },
    size: {
        width: string;
        height: string;
    },
    widget?: boolean;
    onClose?: () => void;
    removeOnClose?: boolean;
    pointerEvents?: string;
}

export type StageCustomContentWrapper = ListenableIframe & RemovableWrapper & {
    hide: () => void,
    show: () => void,
}
