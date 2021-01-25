import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../IO/sendEvent'
import processTemplate from '../IO/processTemplate'
import subscribeToEvent from '../IO/subscribeToEvent'

const createStream = (id) => ({
  update(params) {
    sendEvent({
      action: 'update-stream',
      data: { template: processTemplate(params.template, params.variables), id }
    })
  },

  destroy() {
    sendEvent({
      action: 'remove-stream',
      data: { id }
    })
  }
})

export default {
  addStream(data) {
    return new Promise((resolve) => {
      const uuid = uuidv4()

      subscribeToEvent(`stream-message-for-${uuid}`, (response) => data.onMessage(response))
      sendEvent({
        action: 'add-stream',
        data: { template: processTemplate(data.template, data.variables), id: uuid }
      })

      resolve(createStream(uuid))
    })
  }
}