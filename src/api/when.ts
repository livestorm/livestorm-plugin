import { v4 as uuidv4 } from 'uuid'
import sendEvent from '@/io/sendEvent'
import subscribeToEvent from '@/io/subscribeToEvent'

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
  const uuid = uuidv4()
  sendEvent({
    action: 'event-ends',
    data:  { id: uuid }
  })

  subscribeToEvent(`event-ends-listener-${uuid}`, (payload) => callback(payload))
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
  const uuid = uuidv4()
  sendEvent({
    action: 'event-starts',
    data:  { id: uuid }
  })

  subscribeToEvent(`event-starts-listener-${uuid}`, (payload) => callback(payload))
}
