import { ListenableIframe, ListenableIframeParams } from '../types/listenableIframe';
export default function actsAsListenableIframe<T extends ListenableIframeParams>(eventName: string, options: T): Promise<ListenableIframe>;
