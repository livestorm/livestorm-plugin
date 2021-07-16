import { register } from '../dist/index'

import chat from './chat'
import modal from './modal'
import stage from './stage'
import streams from './streams'

register( () => {
  chat()
  modal()
  stage()
  streams()
})