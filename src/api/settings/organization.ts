import actsAsListenableIframe from '@/io/actsAsListenableIframe'
import { ListenableIframeParams } from '@/types/listenableIframe'

/**
 * 
 * Register a settings panel directly in the marketplace page of the plugin.
 * This will allow moderators to configure your plugin from their Livestorm dashboard
 *
 * @example Settings.Organization.registerPanel({ template, variables, onMessage })
 *
 * @doc https://developers.livestorm.co/docs/settings
 * 
 */
export function registerPanel(data: ListenableIframeParams) {
  return actsAsListenableIframe('settings-register-organization-panel', data)
}
