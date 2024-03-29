import { SidebarHeaderButton, SidebarPanelOptions, SidebarPanelWrapper } from '@/types/sidebar'

import sendEvent from '@/io/sendEvent'
import actsAsListenableIframe from '@/io/actsAsListenableIframe'
import subscribeToEvent from '@/io/subscribeToEvent'
import simpleCallbackHandler from '@/io/simpleCallbackHandler'

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

  const { onHeaderButtonClick, headerButtons } = options
  if (onHeaderButtonClick && headerButtons?.length > 0) {
    subscribeToEvent(`click-sidebar-panel-header-button-${id}`, (headerButton: SidebarHeaderButton) => onHeaderButtonClick(headerButton))
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

export async function focusBuiltInPanel(tab: 'chat'|'people'|'qa'|'polls'): Promise<void> {
  return new Promise((resolve) => {
    simpleCallbackHandler({
      action: 'sidebar-focus-built-in-panel',
      data: {
        tab,
      },
      callback: () => resolve()
    })
  })
}