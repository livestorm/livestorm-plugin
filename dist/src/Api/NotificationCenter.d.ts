declare const _default: {
    /**
      * Displays custom HTML content within the Notification aera of the Room.
      * Can be used to display notifications or temporary information on top of the Room.
      * The content of the NotificationCenter is automatically flushed after 12 seconds.
      *
      * The background is transparent to allow completely custom UI.
      *
      * @example NotificationCenter.showIframe('<p>{{ content }}</p>', { content: 'lol' s})
      *
      * @param template - The HTML content you want to display in the modal (can contain CSS or JS)
      * @param variables - Hash of variables you can interpolate into the HTML template
      *
      *
    */
    showIframe(template: string, variables: any): void;
};
export default _default;
