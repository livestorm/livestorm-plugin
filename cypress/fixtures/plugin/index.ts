import { PubSub, register } from '../../../dist/index'

import chat from './chat'
import modal from './modal'
import pubSub from './pubSub'
import stage from './stage'
import streams from './streams'
import users from './users'

register( () => {
  chat()
  modal()
  pubSub()
  stage()
  streams()
  users()
})