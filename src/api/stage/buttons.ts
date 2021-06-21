import { DefaultButtonOptions, StageButtonOptions, StageButtonWrapper } from '@/types/button'

import sendEvent from '@/io/sendEvent'
import processTemplate from '@/io/processTemplate'
import subscribeToEvent from '@/io/subscribeToEvent'
import addButtonDefaultListeners from '@/io/addButtonDefaultListeners'

/** Register an entry in the Share menu for contributors.
 *  Can be used to trigger any action (sharing custom content, files, videos, etc)
 * 
 * @example Stage.Buttons.registerShareButton({
 *   label: 'Share a Document',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 * 
 * @doc https://developers.livestorm.co/docs/stage#registersharebutton
 */
export function registerShareButton(options: DefaultButtonOptions): void {
  addButtonDefaultListeners('register-share-button', options)
}
  
/** Register an entry in the stage actions (for contributors and participants)
   *  Can be used to trigger any action (sharing custom content, files, videos, etc)
   * 
   * @example Stage.Buttons.registerStageButton({
   *   label: 'React with an emoji',
   *   icon: 'smile',
   *   dropdownActions: [{ name: '😱', label: '😱' }],
   *   onClick: (payload) => {}
   * })
   * 
   * @doc https://developers.livestorm.co/docs/stage#registerstagebutton
   */
export function registerStageButton(options: StageButtonOptions): StageButtonWrapper {
  const { iframe } = options
  const uuid = addButtonDefaultListeners('register-stage-button', {
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