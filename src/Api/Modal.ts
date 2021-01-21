import sendEvent from '../IO/sendEvent'
import processTemplate from '../IO/processTemplate'

export default {
  showIframe(template: string, variables: any) {
    sendEvent({
      action: 'modal-show-iframe',
      data: {
        template: processTemplate(template, variables)
      }
    })
  }
}