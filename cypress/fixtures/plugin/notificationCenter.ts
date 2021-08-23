
import { NotificationCenter } from '../../../dist'

import fixtureNotificationCenter from '../notificationCenter.json'

export default function notificationCenter (): void {
  NotificationCenter.showIframe(fixtureNotificationCenter.showIframe.template, fixtureNotificationCenter.showIframe.variables)
}