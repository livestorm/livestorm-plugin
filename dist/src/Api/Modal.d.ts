declare const _default: {
    /**
      * Display a modal with custom HTML content.
      * Useful for many use cases including : forms, call to actions, information box, etc
      *
      * @example Modal.showIframe({
      *    template: '<p>{{ content }}</p>',
      *    variables: { content: 'hello' }
      *    onMessage: (message) => {}
      *  })
      *
      * @param template - The HTML content you want to display in the modal (can contain CSS or JS)
      * @param variables - Hash of variables you can interpolate into the HTML template
      * @param onMessage - Function called whenever the postMessage({}) function is called within the HTML
      *
      *
    */
    showIframe(data: {
        template: string;
        variables?: any;
        onMessage?: Function;
    }): void;
};
export default _default;
