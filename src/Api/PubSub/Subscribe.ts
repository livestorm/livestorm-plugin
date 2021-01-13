import sendEvent from '../../IO/sendEvent'

export default function Subscribe(eventName: string, onEventReceived: (message: any) => any): void {
  window.addEventListener('message', (message) => {
    console.log('DZAOIDZAOO', message)
    onEventReceived(message)
  })

  sendEvent({
    action: 'subscribe-event',
    data: { eventName }
  })
}