import { v4 as uuidv4 } from 'uuid'
import sendEvent from './sendEvent'
import subscribeToEvent from './subscribeToEvent'

export default function simpleCallbackHandler<T extends Record<string, unknown>>(
  { action, listener, callback, data = {} }: {
    action: string,
    listener?: string,
    data?: Record<string, unknown>,
    callback: (data: T) => void
  }): void {
  const uuid = uuidv4()
  sendEvent({
    action,
    data:  { id: uuid, data }
  })

  subscribeToEvent(`${listener || action}-${uuid}`, (payload: T) => callback(payload))
}