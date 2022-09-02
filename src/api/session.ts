import { Session } from '@/types/session'
import simpleCallbackHandler from '@/io/simpleCallbackHandler'

/**
  * Returns the session information
  *
  * @example await Livestorm.Session()
  *
  * @returns a promise that resolves with the session information as a hash
  * 
  */
export default function Session(): Promise<Session> {
  return new Promise((resolve) => {
    simpleCallbackHandler<{ session: Session }>({
      action: 'session-data',
      callback: ({ session }) => resolve(session)
    })
  })
}
