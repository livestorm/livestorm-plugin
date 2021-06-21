import simpleCallbackHandler from '@/io/simpleCallbackHandler'

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
export function eventEnds (callback: (params: Record<string, unknown>) => void): void {
  simpleCallbackHandler({
    action: 'event-ends',
    listener: 'event-ends-listener',
    callback
  })
}

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
export function eventStarts (callback: (params: Record<string, unknown>) => void): void {
  simpleCallbackHandler({
    action: 'event-starts',
    listener: 'event-starts-listener',
    callback
  })
}

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
export function userJoins (callback: (params: Record<string, unknown>) => void): void {
  simpleCallbackHandler({ action: 'user-joins', callback })
}

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
export function userLeaves (callback: (params: Record<string, unknown>) => void): void {
  simpleCallbackHandler({ action: 'user-leaves', callback })
}
