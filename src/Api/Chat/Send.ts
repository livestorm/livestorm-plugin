import { v4 as uuidv4 } from 'uuid';
import sendEvent from '../../IO/sendEvent'

export default function Send(data: any): void {
  sendEvent({
    action: 'chat-send',
    data: {
      id: uuidv4(),
      ...data
    }
  })
}