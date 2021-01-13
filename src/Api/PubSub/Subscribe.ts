import sendEvent from '../../IO/sendEvent'
import subscribeToEvent from '../../IO/subscribeToEvent'

export default function Subscribe(eventName: string, onEventReceived: (message: any) => any): void {
  subscribeToEvent(eventName, (message) => onEventReceived(message))

  sendEvent({
    action: 'subscribe-event',
    data: { eventName }
  })
}