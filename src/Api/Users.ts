import { User } from '@/types/user'

import { v4 as uuidv4 } from 'uuid'
import sendEvent from '@/io/sendEvent'
import subscribeToEvent from '@/io/subscribeToEvent'

export default {
  /**
  * Returns the current user information
  *
  * @example await Livestorm.Users.me()
  *
  * @returns a promise that resolves with the user information as a hash
  * 
  */
  me(): Promise<User> {
    return new Promise((resolve) => {
      const uuid = uuidv4()

      // TODO: There is a mix between users and user
      subscribeToEvent<{ users: User }>(`users-me-${uuid}`, ({ users }) => resolve(users))
      sendEvent({
        action: 'users-me',
        data: { id: uuid }
      })
    })
  },

  /**
  * @example await Livestorm.Users.teamMembers()
  * 
  * @example await Livestorm.Users.teamMembers()
  * @returns a promise that resolves with the users information as an array
  */
  teamMembers(): Promise<User[]> {
    return new Promise((resolve) => {
      const uuid = uuidv4()
      subscribeToEvent<{ users: User[] }>(`users-team-members-${uuid}`, ({ users }) => resolve(users))
      sendEvent({
        action: 'users-team-members',
        data: { id: uuid }
      })
    })
  },

  
  /**
  * Returns an array containing all the currently connected people in the Room.
  * This list may change during the lifecycle of an event
  *
  * @example await Livestorm.Users.everyone()
  *
  * @returns a promise that resolves with the users information as an array
  * 
  */
  everyone(): Promise<User[]> {
    return new Promise((resolve) => {
      const uuid = uuidv4()
      subscribeToEvent<{ users: User[] }>(`users-everyone-${uuid}`, ({ users }) => resolve(users))
      sendEvent({
        action: 'users-everyone',
        data: { id: uuid }
      })
    })
  },
}