import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../IO/sendEvent'
import subscribeToEvent from '../IO/subscribeToEvent'

export default {
  /**
    * Register an entry in the stage actions (for contributors and participants)
    * Can be used to trigger any action (sharing custom content, files, videos, etc) 
    *
    * @example RegisterStageButton.register({
    *   label: 'React with an emoji',
    *   icon: 'smile',
    *   dropdownActions: [{ name: '😱', label: '😱' }],
    *   onClick: (payload) => {}
    * })
    *
    * @param label - The label of the action
    * @param icon - An icon from the https://feathericons.com library (not recommended)
    * @param imageSource - URL of an icon (png, svg) that will be displayed next to your button
    * @param onClick - Function called whenever someone clicks on your button
    * 
  */
  register: ({ iframe, onIframeMessage, dropdownActions, dropdownActionsTextClasses, imageSource, label, icon, tooltip, onClick }: {
    label?: string,
    tooltip?: string,
    icon?: string,
    imageSource?: string,
    dropdownActions?: Array<{ name?: string, label: any, imageSource?: string }>,
    dropdownActionsTextClasses?: string,
    iframe?: string,
    onIframeMessage?: (payload?: any) => unknown,
    onClick?: (payload?: any) => unknown
  }): void => {
    const uuid = uuidv4()
    sendEvent({
      action: 'register-stage-button',
      data:  { label, icon, imageSource, tooltip,  id: uuid, iframe, dropdownActions, dropdownActionsTextClasses }
    })
    subscribeToEvent(`iframe-message-for-${uuid}`, (response) => onIframeMessage(response))
    subscribeToEvent(`register-stage-button-${uuid}`, (data) => onClick(data))
  }
}