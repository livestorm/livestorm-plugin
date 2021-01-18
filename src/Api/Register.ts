import subscribeToEvent from '../IO/subscribeToEvent'
import Configuration from '../Configuration'

export default function register(main: () => unknown) {
  subscribeToEvent('register', (data) => {
    Configuration.set(data)
    main()
  })
}