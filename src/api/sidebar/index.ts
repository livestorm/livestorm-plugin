import { SidebarPanelOptions, SidebarPanelWrapper } from '@/types/sidebar'

import sendEvent from '@/io/sendEvent'
import actsAsListenableIframe from '@/io/actsAsListenableIframe'
import subscribeToEvent from '@/io/subscribeToEvent'

export async function registerPanel(options: SidebarPanelOptions): Promise<SidebarPanelWrapper> {
  const listenableIframe = await actsAsListenableIframe('register-sidebar-panel', options)

  const id = listenableIframe.getId()

  const data = { slug: options.slug, id }

  const { minimize, onMinimize } = options
  if (minimize && onMinimize) {
    subscribeToEvent(`minimize-sidebar-panel-${id}`, () => onMinimize())
  }

  const { onClose } = options
  if (onClose) {
    subscribeToEvent(`close-sidebar-panel-${id}`, () => onClose())
  }

  return {
    ...listenableIframe,
    remove() {
      sendEvent({
        action: 'remove-sidebar-panel',
        data,
      })
    },
    focus() {
      sendEvent({
        action: 'focus-sidebar-panel',
        data,
      })
    },
    close() {
      sendEvent({
        action: 'close-sidebar-panel',
        data,
      })
    },
    setNotificationCount(count) {
      sendEvent({
        action: 'set-notification-count-sidebar-panel',
        data: {
          ...data,
          count,
        }
      })
    },
    clearNotificationCount() {
      sendEvent({
        action: 'set-notification-count-sidebar-panel',
        data: {
          ...data,
          count: 0,
        }
      })
    },
  }
}