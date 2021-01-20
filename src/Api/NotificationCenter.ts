import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../IO/sendEvent'
import processTemplate from '../IO/processTemplate'

export default {
  showIframe(template: string, variables: any) {
    sendEvent({
      action: 'notification-center-show-iframe',
      data: {
        template: processTemplate(template, variables),
        id: uuidv4()
      }
    })
  }
}