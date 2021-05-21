import Configuration from '@/configuration'

function getScopeId(scope = 'event') {
  if (scope === 'event') return Configuration.eventTypeId
  else if (scope === 'session') return Configuration.sessionId
  else if (scope === 'organization') return Configuration.organizationId
  else return Configuration.eventTypeId
}

export default {
  /**
    * 
    * Store a value under a specific key. This storage is persistant and shared across participants of the event
    * 
    *
    * @example Storage.setItem('key', 'value')
    *
    * @param key - The key that will allow you to retrieve the value
    * @param value - The value you want to store
    * 
    * @returns a promise that resolves whenever the value has been successfuly stored
    * 
    * 
  */
  async setItem(key: string, value: string, options = { scope: 'event' }): Promise<Response> {
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
  },

  /**
    * 
    * Retrieve a value set at a specific key. This storage is persistant and shared across participants of the event
    * 
    *
    * @example Storage.getItem('key')
    *
    * @param key - The key at which you item is set
    * 
    * @returns a promise that resolves with the stored value 
    * 
    * 
  */
  async getItem(key: string, options = { scope: 'event' }): Promise<string> {
    const { organizationId, pluginId, pluginHost } = Configuration

    const res = await fetch(`${pluginHost}/api/v1/storage_keys?organization_id=${organizationId}&session_id=${getScopeId(options.scope)}&plugin_id=${pluginId}&key=${key}`)
    const body = await res.json()

    return body.storageKey ? body.storageKey.value : null
  }
}
