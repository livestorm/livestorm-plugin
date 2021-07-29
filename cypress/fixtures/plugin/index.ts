import { register } from '../../../dist/index'

import chat from './chat'
import modal from './modal'
import notificationCenter from './notificationCenter'
import stage from './stage'
import streams from './streams'
import users from './users'

register( () => {
  chat()
  modal()
  notificationCenter()
  stage()
  streams()
  users()
})