import { Modal } from '../types/modal';
declare const _default: {
    /**
      * Display a modal with custom HTML content.
      * Useful for many use cases including : forms, call to actions, information box, etc
      *
      * @example Modal.showIframe({
      *    size: 'large',
      *    template: '<p>{{ content }}</p>',
      *    variables: { content: 'hello' }
      *    onMessage: (message) => {}
      *  })
      *
      * @param size - Customize the width of the modal (normal, large, extraLarge)
      * @param template - The HTML content you want to display in the modal (can contain CSS or JS)
      * @param variables - Hash of variables you can interpolate into the HTML template
      * @param onMessage - Function called whenever the postMessage({}) function is called within the HTML
      *
      *
    */
    showIframe(data: {
        size?: 'normal' | 'large' | 'extraLarge';
        template: string;
        variables?: Record<string, unknown>;
        onMessage?: (arg: unknown) => unknown;
    }): Promise<Modal>;
};
export default _default;
