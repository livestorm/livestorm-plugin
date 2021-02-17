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
  job_title: String,
  last_name: String,
  pending: String,
  prepare: Boolean,
  prepare_enable_camera: Boolean,
  prepare_enable_microphone: Boolean,
}

export interface Users {
  me: () => Promise<User>
  teamMembers: () => Promise<Array<User>>
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