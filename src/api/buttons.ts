import { DefaultButtonOptions, StageButtonOptions, StageButtonWrapper } from '@/types/button'

import { v4 as uuidv4 } from 'uuid'
import sendEvent from '@/io/sendEvent'
import processTemplate from '@/io/processTemplate'
import subscribeToEvent from '@/io/subscribeToEvent'

const defaultDispatch = <T extends DefaultButtonOptions>(eventName: string, { onClick, ...options }: T): string => {
  const uuid = uuidv4()
  sendEvent({
    action: eventName,
    data: { ...options, id: uuid }
  })

  subscribeToEvent(`${eventName}-${uuid}`, () => onClick())

  return uuid
}

/** Register an entry in the Share menu of the chat.
 *  Can be used to trigger any action (sharing custom content, files, videos, etc)
 * 
 * @exemple Buttons.registerChatShareButton({
 *   label: 'Share a Document',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 * 
 * @param options - DefaultButtonOptions
 */
export function registerChatShareButton(options: DefaultButtonOptions): void {
  defaultDispatch('chat-register-share-button', options)
}

/** Register an entry in the Share menu for contributors.
 *  Can be used to trigger any action (sharing custom content, files, videos, etc)
 * 
 * @exemple Buttons.registerShareButton({
 *   label: 'Share a Document',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 * 
 * @param options - DefaultButtonOptions
 */
export function registerShareButton(options: DefaultButtonOptions): void {
  defaultDispatch('register-share-button', options)
}

/** Register an entry in the stage actions (for contributors and participants)
 *  Can be used to trigger any action (sharing custom content, files, videos, etc)
 * 
 * @exemple Buttons.registerStageButton({
 *   label: 'React with an emoji',
 *   icon: 'smile',
 *   dropdownActions: [{ name: '😱', label: '😱' }],
 *   onClick: (payload) => {}
 * })
 * 
 * @param options - StageButtonOptions
 */
export function registerStageButton(options: StageButtonOptions): StageButtonWrapper {
  const { iframe } = options
  const uuid = defaultDispatch('register-stage-button', {
    ...options, 
    iframe: iframe ? {
      width: iframe.width,
      height: iframe.height,
      template: processTemplate(iframe.template, iframe.variables)
    } : undefined,
  })
  subscribeToEvent(`iframe-message-for-${uuid}`, (response) => iframe.onMessage(response))

  return {
    remove() {
      sendEvent({
        action: 'register-stage-button-remove',
        data:  { id: uuid }
      })
    }
  }
}