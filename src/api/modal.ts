import { Modal } from '@/types/modal'

import { v4 as uuidv4 } from 'uuid'
import sendEvent from '@/io/sendEvent'
import processTemplate from '@/io/processTemplate'
import subscribeToEvent from '@/io/subscribeToEvent'

const createInstance = (id: string): Modal => ({
  /**
   * 
   * Send a message to the modal.
   * Can be catched via a window.addEventListener('message', () => {}).
   * 
  */
  sendMessage(data: Record<string, unknown>) {
    sendEvent({
      action: `iframe-message-to-${id}`,
      data: { data, id }
    })
  }
})

/**
 * 
 * Display a modal with custom HTML content. 
 * Useful for many use cases including : forms, call to actions, information box, etc
 * 
 * @example Modal.showIframe({
 *   size: 'large',
 *   template: '<p>{{ content }}</p>',
 *   variables: { content: 'hello' }
 *   onMessage: (message) => {}
 * })
 * 
 * @doc https://developers.livestorm.co/docs/modal#showiframe
 * 
 */ 
export function showIframe(data: { size?: 'normal' | 'large' | 'extraLarge', template: string, variables?: Record<string, unknown>, onMessage?: (arg: unknown) => unknown }): Promise<Modal> {
  return new Promise((resolve) => {
    const uuid = uuidv4()
    subscribeToEvent(`iframe-message-for-${uuid}`, (response) => data.onMessage(response))
    sendEvent({
      action: 'modal-show-iframe',
      data: { template: processTemplate(data.template, data.variables), size: data.size, id: uuid }
    })
    resolve(createInstance(uuid))
  })
}
