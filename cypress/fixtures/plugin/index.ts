import { register } from '../../../dist/index'

import chat from './chat'
import modal from './modal'
import stage from './stage'
import storage from './storage'
import streams from './streams'
import users from './users'

register( () => {
  chat()
  modal()
  stage()
  storage()
  streams()
  users()
})