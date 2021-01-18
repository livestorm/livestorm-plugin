import Configuration from '../Configuration'

export default function sendEvent(payload: { action: string, data: any }): void {
  const messageData = {
    pluginName: Configuration.data.pluginName,
    ...payload
  }
  parent.postMessage(JSON.stringify(messageData), '*')
}