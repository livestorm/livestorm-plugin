import Configuration from '@/configuration'
import type { TrackingEvent } from '@/types/tracking/event'
/**
 * 
 * Track an event to make it visible in the dashboard
 * 
 * @example Tracking.Event.track({
 *   key: 'emoji-reactions',
 *   value: 'joy'
 * })
 *
 * @doc https://developers.livestorm.co/docs/tracking#track
 * 
 */
export async function track<T extends string | number | Record<string, unknown>>(options: TrackingEvent<T>): Promise<Response> {
  const organizationId = Configuration.get('organizationId')
  const pluginHost = Configuration.get('pluginHost')
  const pluginId = Configuration.get('pluginId')
  const token = Configuration.get('token')

  return await fetch(`${pluginHost}/api/v1/tracking/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify({
      key: options.key,
      value: options.value,
      organization_id: organizationId,
      plugin_id: pluginId
    })
  })
}