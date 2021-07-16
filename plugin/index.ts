import { register } from '../dist/index'

import chat from './chat'
import stage from './stage'
import streams from './streams'

register( () => {
  chat()
  stage()
  streams()
})