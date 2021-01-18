import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../IO/sendEvent'
import subscribeToEvent from '../IO/subscribeToEvent'

export default {
  register: ({ iframe, dropdownActions, label, icon, tooltip, onClick }: {
    label: string,
    tooltip?: string,
    icon?: string,
    dropdownActions?: [{ label: any, onClick: () => unknown }]
    iframe?: string
    onClick?: () => unknown
  }): void => {
    const uuid = uuidv4()
    sendEvent({
      action: 'register-stage-button',
      data:  { label, icon, tooltip,  id: uuid, iframe, dropdownActions }
    })

    subscribeToEvent(`register-stage-button-${uuid}`, () => onClick())
  }
}