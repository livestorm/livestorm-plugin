import { Session } from '@/types/session'
import simpleCallbackHandler from '@/io/simpleCallbackHandler'

/**
  * Returns the current session information
  *
  * @example await Livestorm.Session.current()
  *
  * @returns a promise that resolves with the session information as a hash
  * 
  */
export function current(): Promise<Session> {
  return new Promise((resolve) => {
    simpleCallbackHandler<{ session: Session }>({
      action: 'session-data',
      callback: ({ session }) => resolve(session)
    })
  })
}
