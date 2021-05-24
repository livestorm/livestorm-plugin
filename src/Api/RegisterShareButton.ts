import { v4 as uuidv4 } from 'uuid'
import sendEvent from '@/io/sendEvent'
import subscribeToEvent from '@/io/subscribeToEvent'

export default {
  /**
    * Register an entry in the Share menu for contributors.
    * Can be used to trigger any action (sharing custom content, files, videos, etc) 
    *
    * @example RegisterShareButton.register({
    *   label: 'Share a Document',
    *   imageSource: 'http://image/image.png',
    *   onClick: () => console.log('someone clicked this button')
    * })
    *
    * @param label - The label of the action
    * @param icon - An icon from the https://feathericons.com library (not recommended)
    * @param imageSource - URL of an icon (png, svg) that will be displayed next to your button
    * @param onClick - Function called whenever someone clicks on your button
    * 
  */
  register: ({ label, icon, imageSource, onClick }: {
    label: string,
    icon?: string,
    imageSource?: string,
    onClick: () => unknown
  }): void => {
    const uuid = uuidv4()
    sendEvent({
      action: 'register-share-button',
      data:  { label, icon, imageSource, id: uuid }
    })

    subscribeToEvent(`register-share-button-${uuid}`, () => onClick())
  }
}