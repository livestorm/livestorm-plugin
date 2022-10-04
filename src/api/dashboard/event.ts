import Configuration from '@/configuration'
import type { DashboardEvent } from '@/types/dashboard/event'
/**
 * 
 * Store a value under a specific key. This storage is persistant and shared across participants of the event
 * 
 * @example Dashboard.Event.track({
 *   name: {
 *     en: '# of emoji reactions',
 *     fr: '# de réactions emoji',
 *   },
 *   key: 'nb-of-emoji-reactions',
 *   
 * })
 *
 * @doc https://developers.livestorm.co/docs/storage#setitem
 * 
 */
export async function track(options: DashboardEvent): Promise<Response> {
  const organizationId = Configuration.get('organizationId')
  const pluginHost = Configuration.get('pluginHost')
  const pluginId = Configuration.get('pluginId')
  const token = Configuration.get('token')

  return await fetch(`${pluginHost}/api/v1/dashboard/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify({
      key: options.key,
      value: options.value,
      datatype: options.datatype,
      organization_id: organizationId,
      plugin_id: pluginId
    })
  })
}