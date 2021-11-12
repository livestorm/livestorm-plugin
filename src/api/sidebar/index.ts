import { PanelOptions, PanelWrapper } from '@/types/sidebar'

import sendEvent from '@/io/sendEvent'
import actsAsListenableIframe from '@/io/actsAsListenableIframe'

export async function registerPanel(options: PanelOptions): Promise<PanelWrapper> {
  const listenableIframe =  await actsAsListenableIframe('register-sidebar-panel', options,
  )

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
    }
  }
}