import { ListenableIframe, ListenableIframeParams } from "./listenableIframe"
import { RemovableWrapper } from "./wrapper"

export type PanelOptions = ListenableIframeParams & {
    label: string
    imageSource?: string
    icon?: string
    slug: string
}

export type PanelWrapper = RemovableWrapper & ListenableIframe & {
    focus: () => void
}
