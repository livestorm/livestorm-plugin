import sendEvent from '../../IO/sendEvent'

export default function Publish(event: string, data: any): void {
  sendEvent({
    action: 'publish-event',
    data: {
      eventName: event,
      ...data
    }
  })
}