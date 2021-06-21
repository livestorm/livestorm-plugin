import { DefaultButtonOptions } from '@/types/button'

import { v4 as uuidv4 } from 'uuid'
import sendEvent from '@/io/sendEvent'
import subscribeToEvent from '@/io/subscribeToEvent'

export default function addButtonDefaultListeners <T extends DefaultButtonOptions>(eventName: string, { onClick, ...options }: T): string {
  const uuid = uuidv4()
  sendEvent({
    action: eventName,
    data: { ...options, id: uuid }
  })
  
  // TODO: we should suffix the eventName with the type of event, here it would be `${eventName}-${uuid}-click`
  subscribeToEvent(`${eventName}-${uuid}`, () => onClick())
  
  return uuid
}