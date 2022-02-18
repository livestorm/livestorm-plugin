import { SidebarPanelOptions, SidebarPanelWrapper } from '@/types/sidebar'

import sendEvent from '@/io/sendEvent'
import actsAsListenableIframe from '@/io/actsAsListenableIframe'

export async function registerPanel(options: SidebarPanelOptions): Promise<SidebarPanelWrapper> {
  const listenableIframe =  await actsAsListenableIframe('register-sidebar-panel', options)

  const id = listenableIframe.getId()
  
  return {
    ...listenableIframe,
    remove () {
      sendEvent({
        action: 'remove-sidebar-panel',
        data:  { slug: options.slug, id, }
      })
    },
    focus () {
      sendEvent({
        action: 'focus-sidebar-panel',
        data:  { slug: options.slug, id, }
      })
    },
    close () {
      sendEvent({
        action: 'close-sidebar-panel',
        data:  { slug: options.slug, id, }
      })     
    }
  }
}