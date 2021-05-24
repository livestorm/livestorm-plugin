import { v4 as uuidv4 } from 'uuid'
import sendEvent from '@/io/sendEvent'
import subscribeToEvent from '@/io/subscribeToEvent'

/**
  * Register an entry in the context menu of a chat message.
  * Can be used to trigger any action (sharing custom content, files, videos, etc) 
  *
  * @example Chat.registerMessageAction({
  *   label: 'Send a message',
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
export default function registerMessageAction ({ label, icon, imageSource, onClick }: {
    label: string,
    icon?: string,
    imageSource?: string,
    onClick: (any) => unknown
  }): void {
  const uuid = uuidv4()
  sendEvent({
    action: 'chat-register-message-action',
    data:  { label, icon, imageSource, id: uuid }
  })

  subscribeToEvent<{ id: string, update: (data: Record<string, unknown>) => void }>(`chat-register-message-action-${uuid}`, (data) => {
    data.update = (newData) => {
      sendEvent({
        action: `chat-register-message-action-update-${data.id}`,
        data: newData
      })
    }

    onClick(data)
  })
}