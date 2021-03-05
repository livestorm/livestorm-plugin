import Configuration from '../Configuration'

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
  async setItem(key: string, value: string) {
    const { organizationId, sessionId, pluginId, pluginHost } = Configuration.data

    return await fetch(`${pluginHost}/api/v1/storage_keys`, {
      method: 'POST',
      body: JSON.stringify({
        key,
        value: JSON.stringify(value),
        organization_id: organizationId,
        session_id: sessionId,
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
  async getItem(key: string): Promise<string> {
    const { organizationId, sessionId, pluginId, pluginsHost } = Configuration.data

    const res = await fetch(`${pluginsHost}/api/v1/storage_keys?organization_id=${organizationId}&session_id=${sessionId}&plugin_id=${pluginId}&key=${key}`)
    const body = await res.json()

    return body.storageKey.value
  }
}
