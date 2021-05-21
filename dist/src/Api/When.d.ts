declare const _default: {
    /**
      *
      * Be notified when the event ends.
      * The callback is not called if the user joins the event after the end.
      *
      * @example When.eventEnds(() => {
      *  // do something
      * })
      *
      * @param callback - A function to be called whenever the event is triggered
      *
    */
    eventEnds: (callback: (params: Record<string, unknown>) => void) => void;
    /**
      *
      * Be notified when the event starts.
      * The callback is not called if the user joins the event after the start.
      *
      * @example When.eventStarts(() => {
      *  // do something
      * })
      *
      * @param callback - A function to be called whenever the event is triggered
      *
    */
    eventStarts: (callback: (params: Record<string, unknown>) => void) => void;
};
export default _default;
