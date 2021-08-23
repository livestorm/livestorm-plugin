import { ListenableIframe, ListenableIframeParams } from '../types/listenableIframe';
export default function actsAsListenableIframe(eventName: string, iframe: ListenableIframeParams, additionalData?: Record<string, unknown>): Promise<ListenableIframe>;
