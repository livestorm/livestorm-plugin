import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../IO/sendEvent'
import subscribeToEvent from '../IO/subscribeToEvent'
import Configuration from '../Configuration'

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
  me: User,
  teamMembers: User,
  everyone: () => Promise<Array<User>>
}

const users: Users = {
  me: Configuration.data.event.users.me,
  teamMembers: Configuration.data.event.users.teamMembers,

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