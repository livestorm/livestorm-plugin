import { register } from '../../../dist/index'

import chat from './chat'
import modal from './modal'
import stage from './stage'
import streams from './streams'
import users from './users'

register( () => {
  chat()
  modal()
  stage()
  streams()
  users()
})