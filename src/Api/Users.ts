import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../IO/sendEvent'
import subscribeToEvent from '../IO/subscribeToEvent'

interface User {
  avatar: String,
  color: String,
  company_name: String,
  first_name: String,
  id: String,
  is_connected: Boolean,
  is_guest_speaker: Boolean,
  is_team_member: Boolean,
  is_host?: Boolean,
  job_title: String,
  last_name: String,
  pending: String,
  prepare: Boolean,
  prepare_enable_camera: Boolean,
  prepare_enable_microphone: Boolean,
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
    return new Promise((resolve, reject) => {
      const uuid = uuidv4()
      subscribeToEvent(`users-me-${uuid}`, ({ users }) => resolve(users))
      sendEvent({
        action: 'users-me',
        data: { id: uuid }
      })
    })
  },

  
  teamMembers: () => {
    return new Promise((resolve, reject) => {
      const uuid = uuidv4()
      subscribeToEvent(`users-team-members-${uuid}`, ({ users }) => resolve(users))
      sendEvent({
        action: 'users-team-members',
        data: { id: uuid }
      })
    })
  },

  everyone() {
    return new Promise((resolve, reject) => {
      const uuid = uuidv4()
      subscribeToEvent(`users-everyone-${uuid}`, ({ users }) => resolve(users))
      sendEvent({
        action: 'users-everyone',
        data: { id: uuid }
      })
    })
  }
}

export default users