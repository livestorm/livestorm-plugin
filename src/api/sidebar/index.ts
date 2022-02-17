import { SidebarPanelOptions, SidebarPanelWrapper } from '@/types/sidebar'

import sendEvent from '@/io/sendEvent'
import actsAsListenableIframe from '@/io/actsAsListenableIframe'
import subscribeToEvent from '@/io/subscribeToEvent'

export async function registerPanel(options: SidebarPanelOptions): Promise<SidebarPanelWrapper> {
  const listenableIframe = await actsAsListenableIframe('register-sidebar-panel', options)

  const uuid = listenableIframe.getId()

  const data = { slug: options.slug, id: uuid }
  
  return {
    ...listenableIframe,
    remove () {
      sendEvent({
        action: 'remove-sidebar-panel',
        data,
      })
    },
    focus () {
      sendEvent({
        action: 'focus-sidebar-panel',
        data,
      })
    },
    close () {
      sendEvent({
        action: 'close-sidebar-panel',
        data,
      })     
    },
    onMinimize (callback: () => void) {
      subscribeToEvent(`minimize-sidebar-panel-${uuid}`, () => callback())
    }
  }
}