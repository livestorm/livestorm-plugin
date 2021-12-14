import { ListenableIframeParams } from '../types/listenableIframe';
import { ModalWrapper } from '../types/modal';
/**
 *
 * Display a modal with custom HTML content.
 * Useful for many use cases including : forms, call to actions, information box, etc
 *
 * @example Modal.showIframe({
 *   size: 'large',
 *   template: '<p>{{ content }}</p>',
 *   variables: { content: 'hello' }
 *   onMessage: (message) => {}
 * })
 *
 * @doc https://developers.livestorm.co/docs/modal#showiframe
 *
 */
export declare function showIframe(options: {
    size?: 'normal' | 'large' | 'extraLarge';
} & ListenableIframeParams): Promise<ModalWrapper>;
