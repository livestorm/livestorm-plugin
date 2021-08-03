import { Modal } from '../types/modal';
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
export declare function showIframe(data: {
    size?: 'normal' | 'large' | 'extraLarge';
    template: string;
    variables?: Record<string, unknown>;
    onMessage?: (arg: unknown) => unknown;
}): Promise<Modal>;
