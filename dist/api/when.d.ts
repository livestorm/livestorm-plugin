/**
 *
 * Be notified when the event ends.
 * The callback is not called if the user joins the event after the end.
 *
 * @example When.eventEnds(() => {
 *  // do something
 * })
 *
 * @doc https://developers.livestorm.co/docs/when#eventends
 *
 */
export declare function eventEnds(callback: (params: Record<string, unknown>) => void): void;
/**
 *
 * Be notified when the event starts.
 * The callback is not called if the user joins the event after the start.
 *
 * @example When.eventStarts(() => {
 *  // do something
 * })
 *
 * @doc https://developers.livestorm.co/docs/when#eventstarts
 *
 */
export declare function eventStarts(callback: (params: Record<string, unknown>) => void): void;
