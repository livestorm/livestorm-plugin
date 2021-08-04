import { register } from '../../../dist/index'

import chat from './chat'
import modal from './modal'
import notificationCenter from './notificationCenter'
import pubSub from './pubSub'
import stage from './stage'
import streams from './streams'
import theme from './theme'
import users from './users'
import when from './when'

register( () => {
  chat()
  modal()
  notificationCenter()
  pubSub()
  stage()
  streams()
  theme()
  users()
  when()
})