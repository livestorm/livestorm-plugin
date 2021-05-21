import Configuration from '@/Configuration'

export default function sendEvent<T extends Record<string, unknown>>(payload: { action: string, data: T }): void {
  const messageData = {
    pluginName: Configuration.pluginName,
    ...payload
  }
  parent.postMessage(JSON.stringify(messageData), '*')
}