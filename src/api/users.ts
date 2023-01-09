import { User } from '@/types/user'
import { DefaultButtonOptions } from '@/types/button'


import addButtonDefaultListeners from '@/io/addButtonDefaultListeners'
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

/**
  * Returns the number of the connected users
  * 
  * @example await Livestorm.Users.connectedCount()
  * @returns a promise that resolves with the number of the connected users
  */
export function connectedCount(): Promise<number> {
  return new Promise((resolve) => {
    simpleCallbackHandler<{ count: number }>({
      action: 'users-connected-count',
      callback: ({ count }) => resolve(count)
    })
  })
}

/**
 * 
 * Register an entry in the context menu of a user in the people tab.
 * Can be used to trigger any action (sharing custom content, files, videos, etc) 
 *
 * @example Users.registerPeopleTabAction({
 *   label: 'Send a private message',
 *   imageSource: 'http://image/image.png',
 *   onClick: (user) => console.log('someone clicked this button')
 * })
 *
 * @doc https://developers.livestorm.co/docs/users#registerpeopletabaction
 * 
 */
export function registerPeopleTabAction (options: DefaultButtonOptions): void {
  addButtonDefaultListeners('users-register-people-tab-action', options)
}

