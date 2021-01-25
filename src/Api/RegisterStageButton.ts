import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../IO/sendEvent'
import subscribeToEvent from '../IO/subscribeToEvent'

export default {
  register: ({ iframe, dropdownActions, dropdownActionsTextClasses, label, icon, tooltip, onClick }: {
    label?: string,
    tooltip?: string,
    icon?: string,
    dropdownActions?: Array<{ name?: string, label: any }>,
    dropdownActionsTextClasses?: string,
    iframe?: string
    onClick?: (payload?: any) => unknown
  }): void => {
    const uuid = uuidv4()
    sendEvent({
      action: 'register-stage-button',
      data:  { label, icon, tooltip,  id: uuid, iframe, dropdownActions, dropdownActionsTextClasses }
    })

    subscribeToEvent(`register-stage-button-${uuid}`, (data) => onClick(data))
  }
}