import { SidebarPanelOptions, SidebarPanelWrapper } from '@/types/sidebar'

import sendEvent from '@/io/sendEvent'
import actsAsListenableIframe from '@/io/actsAsListenableIframe'

export async function registerPanel(options: SidebarPanelOptions): Promise<SidebarPanelWrapper> {
  const listenableIframe =  await actsAsListenableIframe('register-sidebar-panel', options)

  const uuid = listenableIframe.getId()
  
  return {
    ...listenableIframe,
    remove () {
      sendEvent({
        action: 'remove-sidebar-panel',
        data:  { slug: options.slug, id: uuid }
      })
    },
    focus () {
      sendEvent({
        action: 'focus-sidebar-panel',
        data:  { slug: options.slug, id: uuid }
      })
    },
    close () {
      sendEvent({
        action: 'close-sidebar-panel',
        data:  { slug: options.slug, id: uuid }
      })     
    },
    setNotificationCount (count) {
      sendEvent({
        action: 'set-notification-count-sidebar-panel',
        data:  { slug: options.slug, id: uuid, count }
      })     
    },
    clearNotificationCount () {
      sendEvent({
        action: 'set-notification-count-sidebar-panel',
        data:  { slug: options.slug, id: uuid, count: 0 }
      })     
    },
  }
}