import subscribeToEvent from '../IO/subscribeToEvent'
import Configuration from '../Configuration'

export default function register() {
  subscribeToEvent('register', (data) => Configuration.set(data))
}