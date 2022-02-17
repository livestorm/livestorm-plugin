import { register } from '../../../dist/index'

import chat from './chat'
import modal from './modal'
import notificationCenter from './notificationCenter'
import pubSub from './pubSub'
import sidebar from './sidebar'
import stage from './stage'
import storage from './storage'
import streams from './streams'
import theme from './theme'
import users from './users'
import when from './when'

register( () => {
  chat()
  modal()
  notificationCenter()
  pubSub()
  sidebar()
  stage()
  storage()
  streams()
  theme()
  users()
  when()
})