import Configuration from '@/configuration'

export default function sendEvent<T extends Record<string, unknown>>(payload: { action: string, data: T }): void {
  const messageData = {
    pluginName: Configuration.get('pluginName'),
    ...payload
  }
  parent.postMessage(JSON.stringify(messageData), '*')
}