import { register } from '../../../dist/index'

import chat from './chat'
import modal from './modal'
import pubSub from './pubSub'
import stage from './stage'
import streams from './streams'
import users from './users'
import when from './when'

register( () => {
  chat()
  modal()
  pubSub()
  stage()
  streams()
  users()
  when()
})