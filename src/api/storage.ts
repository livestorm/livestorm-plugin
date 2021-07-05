import Configuration from '@/configuration'

function getScopeId(scope = 'event') {
  if (scope === 'event') return Configuration.eventTypeId
  else if (scope === 'session') return Configuration.sessionId
  else if (scope === 'organization') return Configuration.organizationId
  else return Configuration.eventTypeId
}

/**
 * 
 * Store a value under a specific key. This storage is persistant and shared across participants of the event
 * 
 * @example Storage.setItem('foo', 'bar')
 *
 * @doc https://developers.livestorm.co/docs/storage#setitem
 * 
 */
export async function setItem(key: string, value: string, options = { scope: 'event' }): Promise<Response> {
  const { organizationId, pluginId, pluginHost } = Configuration

  return await fetch(`${pluginHost}/api/v1/storage_keys`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      key,
      value,
      organization_id: organizationId,
      session_id: getScopeId(options.scope),
      plugin_id: pluginId
    })
  })
}

/**
 * 
 * Retrieve a value set at a specific key. This storage is persistant and shared across participants of the event
 *
 * @example Storage.getItem('key')
 *
 * @doc https://developers.livestorm.co/docs/storage#getitem
 * 
 */
export async function getItem(key: string, options = { scope: 'event' }): Promise<string> {
  const { organizationId, pluginId, pluginHost } = Configuration

  const res = await fetch(`${pluginHost}/api/v1/storage_keys?organization_id=${organizationId}&session_id=${getScopeId(options.scope)}&plugin_id=${pluginId}&key=${key}`)
  const body = await res.json()

  return body.storageKey ? body.storageKey.value : null
}