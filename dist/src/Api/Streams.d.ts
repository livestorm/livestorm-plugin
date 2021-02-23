declare const _default: {
    /**
      * Add a custom HTML stream to the stage.
      * This allows you to display completely custom content to everyone in the room.
      * You can use this API to build things such as : Embed website / video, Live feed, Live coding, games, etc
      *
      * @example Streams.addStream({
      *   template: '<p>{{ content }}</p>',
      *   variables: { content: 'Live stream' },
      *   onMessage: (message) => console.log('the stream send a message')
      * })
      *
      * @param template - The HTML document
      * @param variables - A hash of variables that you want to interpolate within the document
      * @param onMessage - Method called whenever the stream posts a message
      *
      * @returns a promise that resolves with stream instance you can use to update the HTML document or destroy the stream
      *
      * @beta
      *
    */
    addStream(data: {
        template: string;
        variables: any;
        onMessage: Function;
    }): Promise<unknown>;
};
export default _default;
