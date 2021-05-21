import { v4 as uuidv4 } from 'uuid';
import sendEvent from '@/IO/sendEvent'
import subscribeToEvent from '@/IO/subscribeToEvent'

interface User {
  avatar: string,
  color: string,
  company_name: string,
  first_name: string,
  id: string,
  is_connected: boolean,
  is_guest_speaker: boolean,
  is_team_member: boolean,
  is_host?: boolean,
  job_title: string,
  last_name: string,
  pending: string,
  prepare: boolean,
  prepare_enable_camera: boolean,
  prepare_enable_microphone: boolean,
}

export interface Users {
  /**
   * Returns the current user information
   *
   * @example await Livestorm.Users.me()
   *
   * @returns a promise that resolves with the user information as a hash
   * 
   */
  me: () => Promise<User>

  /**
   * Returns an array containing all the team members of the event
   *
   * @example await Livestorm.Users.teamMembers()
   *
   * @returns a promise that resolves with the users information as an array
   * 
   */
  teamMembers: () => Promise<Array<User>>

  /**
   * Returns an array containing all the currently connected people in the Room.
   * This list may change during the lifecycle of an event
   *
   * @example await Livestorm.Users.everyone()
   *
   * @returns a promise that resolves with the users information as an array
   * 
   */
  everyone: () => Promise<Array<User>>
}

const users: Users = {
  me: () => {
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

  
  teamMembers: () => {
    return new Promise((resolve) => {
      const uuid = uuidv4()
      subscribeToEvent<{ users: User[] }>(`users-team-members-${uuid}`, ({ users }) => resolve(users))
      sendEvent({
        action: 'users-team-members',
        data: { id: uuid }
      })
    })
  },

  everyone() {
    return new Promise((resolve) => {
      const uuid = uuidv4()
      subscribeToEvent<{ users: User[] }>(`users-everyone-${uuid}`, ({ users }) => resolve(users))
      sendEvent({
        action: 'users-everyone',
        data: { id: uuid }
      })
    })
  }
}

export default users