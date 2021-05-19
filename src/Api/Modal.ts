import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../IO/sendEvent'
import processTemplate from '../IO/processTemplate'
import subscribeToEvent from '../IO/subscribeToEvent'

const createInstance = (id) => ({
  /**
    * Send a message to the modal.
    * Can be catched via a window.addEventListener('message', () => {}).
    * 
    * @param data - Any data you want to send to the iframe
    * 
  */
  sendMessage(data) {
    sendEvent({
      action: `iframe-message-to-${id}`,
      data: { data, id }
    })
  }
})

interface ModalInstance {
  sendMessage: (any) => void 
}

export default {
  /**
    * Display a modal with custom HTML content. 
    * Useful for many use cases including : forms, call to actions, information box, etc
    *
    * @example Modal.showIframe({
    *    size: 'large',
    *    template: '<p>{{ content }}</p>',
    *    variables: { content: 'hello' }
    *    onMessage: (message) => {}
    *  })
    *
    * @param size - Customize the width of the modal (normal, large, extraLarge)
    * @param template - The HTML content you want to display in the modal (can contain CSS or JS)
    * @param variables - Hash of variables you can interpolate into the HTML template
    * @param onMessage - Function called whenever the postMessage({}) function is called within the HTML
    * 
    * 
  */
  showIframe(data: { size?: string, template: string, variables?: any, onMessage?: (arg: unknown) => unknown }): Promise<ModalInstance> {
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
}