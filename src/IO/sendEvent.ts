export default function sendEvent(payload: { action: string, data: any }): void {
  const messageData = {
    pluginName: 'livereaction',
    ...payload
  }
  parent.postMessage(JSON.stringify(messageData), '*')
}