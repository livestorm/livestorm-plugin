
export default function subscribeToEvent<T extends Record<string, unknown>>(eventName: string, callback: (data: T) => void): void {
  window.addEventListener('message', (message) => {
    if (message.data.eventName === eventName) callback(message.data.data || message.data)
  })
}