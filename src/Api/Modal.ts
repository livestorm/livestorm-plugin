import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../IO/sendEvent'
import processTemplate from '../IO/processTemplate'
import subscribeToEvent from '../IO/subscribeToEvent'

export default {
  showIframe(data: { template: string, variables?: any, onMessage?: Function }) {
    const uuid = uuidv4()
    subscribeToEvent(`iframe-message-for-${uuid}`, (response) => data.onMessage(response))
    sendEvent({
      action: 'modal-show-iframe',
      data: { template: processTemplate(data.template, data.variables), id: uuid }
    })
  }
}