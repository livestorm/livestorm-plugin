import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../IO/sendEvent'
import subscribeToEvent from '../IO/subscribeToEvent'

export default {
  register: ({ iframe, dropdownActions, dropdownActionsTextClasses, imageSource, label, icon, tooltip, onClick }: {
    label?: string,
    tooltip?: string,
    icon?: string,
    imageSource?: string,
    dropdownActions?: Array<{ name?: string, label: any, imageSource?: string }>,
    dropdownActionsTextClasses?: string,
    iframe?: string
    onClick?: (payload?: any) => unknown
  }): void => {
    const uuid = uuidv4()
    sendEvent({
      action: 'register-stage-button',
      data:  { label, icon, imageSource, tooltip,  id: uuid, iframe, dropdownActions, dropdownActionsTextClasses }
    })

    subscribeToEvent(`register-stage-button-${uuid}`, (data) => onClick(data))
  }
}