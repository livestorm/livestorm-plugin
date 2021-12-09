import { v4 as uuidv4 } from 'uuid'

import sendEvent from '@/io/sendEvent'
import subscribeToEvent from '@/io/subscribeToEvent'
import processTemplate from '@/io/processTemplate'

import { ListenableIframe, ListenableIframeParams } from '@/types/listenableIframe'

const createInstance = (id: string): ListenableIframe => ({
  /**
   * 
   * Send a message to the iframe.
   * Can be catched via a window.addEventListener('message', () => {}) inside the template
   * 
  */
  sendMessage(data: Record<string, unknown>) {
    sendEvent({
      action: `iframe-message-to-${id}`,
      data: { data, id }
    })
  },

  getId(): string {
    return id
  }
})

export default function actsAsListenableIframe<T extends ListenableIframeParams> (eventName: string, options: T): Promise<ListenableIframe> {
  return new Promise((resolve) => {
    const uuid = uuidv4()
    subscribeToEvent(`iframe-message-for-${uuid}`, (response) => options.onMessage(response))
    sendEvent({
      action: eventName,
      data: { ...options, template: processTemplate(options.template, options.variables || {}), id: uuid }
    })
    resolve(createInstance(uuid))
  })
}
