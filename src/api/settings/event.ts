import actsAsListenableIframe from '@/io/actsAsListenableIframe'
import { ListenableIframeParams } from '@/types/listenableIframe'

/**
 * 
 * Register a panel in the settings of an event.
 * This will allow moderators to configure your plugin from their Livestorm dashboard
 *
 * @example Settings.Event.registerPanel({ template, variables, onMessage })
 *
 * @doc https://developers.livestorm.co/docs/settings
 * 
 */
export function registerPanel(data: ListenableIframeParams) {
  return actsAsListenableIframe('settings-register-event-panel', data)
}
