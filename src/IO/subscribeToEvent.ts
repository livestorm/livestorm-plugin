export default function subscribeToEvent(eventName, callback) {
  window.addEventListener('message', (message) => {
    if (message.data.name === eventName) callback(message.data)
  })
}