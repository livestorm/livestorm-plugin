import { ListenableIframe } from '@/types/listenableIframe'

export type ModalWrapper = ListenableIframe & {
    close: () => void
}