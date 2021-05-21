import { ConfigurationData } from '../../types/configuration'

import subscribeToEvent from '../IO/subscribeToEvent'
import Configuration from '../Configuration'



/**
  * Allows to register and start the plugin at the correct moment.
  * Code executed outside of the register function might not be loaded properly (unmounted or not yet defined components).
  * 
  * Think of this function as the equivalent of watching the load event of the window to start your app
  *
  * @example Livestorm.register(() => {
  *  // Your code goes here
  * })
  *
  * @param main - The code of your app
  * 
  * 
*/
export default function register(main: () => unknown): void {
  subscribeToEvent<ConfigurationData>('register', (data) => {
    Configuration.set(data)
    main()
  })
}