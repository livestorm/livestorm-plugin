import { User } from '@/types/user'

import simpleCallbackHandler from '@/io/simpleCallbackHandler'

/**
  * Returns the current user information
  *
  * @example await Livestorm.Users.me()
  *
  * @returns a promise that resolves with the user information as a hash
  * 
  */
export function me(): Promise<User> {
  return new Promise((resolve) => {
    simpleCallbackHandler<{ users: User }>({
      action: 'users-me',
      callback: ({ users }) => resolve(users)
    })
  })
}

/**
  * Returns an array containing all the team members of the event
  * 
  * @example await Livestorm.Users.teamMembers()
  * @returns a promise that resolves with the users information as an array
  */
export function teamMembers(): Promise<User[]> {
  return new Promise((resolve) => {
    simpleCallbackHandler<{ users: User[] }>({
      action: 'users-team-members',
      callback: ({ users }) => resolve(users)
    })
  })
}

  
/**
  * Returns an array containing all the currently connected people in the Room.
  * This list may change during the lifecycle of an event
  *
  * @example await Livestorm.Users.everyone()
  *
  * @returns a promise that resolves with the users information as an array
  * 
  */
export function everyone(): Promise<User[]> {
  return new Promise((resolve) => {
    simpleCallbackHandler<{ users: User[] }>({
      action: 'users-everyone',
      callback: ({ users }) => resolve(users)
    })
  })
}
