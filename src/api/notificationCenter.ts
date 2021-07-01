import { v4 as uuidv4 } from 'uuid'
import sendEvent from '@/io/sendEvent'
import processTemplate from '@/io/processTemplate'

/**
 * 
 * Displays custom HTML content within the Notification aera of the Room.
 * Can be used to display notifications or temporary information on top of the Room.
 * The content of the NotificationCenter is automatically flushed after 12 seconds.
 * 
 * The background is transparent to allow completely custom UI.
 *
 * @example NotificationCenter.showIframe('<p>{{ foo }}</p>', { foo: 'bar' })
 *
 * @doc https://developers.livestorm.co/docs/notificationcenter#showiframe
 * 
 */
export function showIframe(template: string, variables: Record<string, unknown>): void {
  sendEvent({
    action: 'notification-center-show-iframe',
    data: {
      template: processTemplate(template, variables),
      id: uuidv4()
    }
  })
}
