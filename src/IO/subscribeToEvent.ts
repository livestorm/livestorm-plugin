export default function subscribeToEvent(eventName, callback) {
  window.addEventListener('message', (message) => {
    if (message.data.eventName === eventName) callback(message.data.data || message.data)
  })
}