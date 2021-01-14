import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../IO/sendEvent'
import subscribeToEvent from '../IO/subscribeToEvent'

export default {
  register: ({ label, icon, onClick }: {
    label: string,
    icon: string,
    onClick: () => unknown
  }): void => {
    const uuid = uuidv4()
    sendEvent({
      action: 'register-share-button',
      data:  { label, icon, id: uuid }
    })

    subscribeToEvent(`register-share-button-${uuid}`, () => onClick())
  }
}