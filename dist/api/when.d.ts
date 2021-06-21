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
  * @param callback - A function to be called whenever the event is triggered
  *
*/
export declare function eventStarts(callback: (params: Record<string, unknown>) => void): void;
/**
  *
  * Be notified when someone enters the room.
  *
  * @example When.userJoins(() => {
  *  // do something
  * })
  *
  * @param callback - A function to be called whenever the event is triggered
  *
*/
export declare function userJoins(callback: (params: Record<string, unknown>) => void): void;
/**
  *
  * Be notified when someone leaves the room.
  *
  * @example When.userJoins(() => {
  *  // do something
  * })
  *
  * @param callback - A function to be called whenever the event is triggered
  *
*/
export declare function userLeaves(callback: (params: Record<string, unknown>) => void): void;
