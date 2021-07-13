import { register } from '../dist/index'

import stage from './stage'
import streams from './streams'

register( () => {
  stage()
  streams()
})