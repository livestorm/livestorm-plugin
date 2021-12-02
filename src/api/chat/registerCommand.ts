import { v4 as uuidv4 } from 'uuid'
import sendEvent from '@/io/sendEvent'
import subscribeToEvent from '@/io/subscribeToEvent'

/**
 * 
 * Register a chat command in the commands menu. Can be used to execute action
 * involving the chat (sharing custom content, files, videos, etc) 
 *
 * @example Chat.registerCommand({
 *   command: 'dm',
 *   label: 'Send a message',
 *   params: ['@name', 'message']
 *   onTrigger: (data) => console.log('someone sends a private message')
 * })
 *
 * @doc https://developers.livestorm.co/docs/chat#registercommand
 * 
 */
export default function registerCommand ({ label, command, params, onTrigger }: {
    label: string,
    command: string,
    params: Array<string>,
    onTrigger: (any) => unknown
  }): void {
  const uuid = uuidv4()
  sendEvent({
    action: 'chat-register-command',
    data:  { label, command, params, id: uuid }
  })

  subscribeToEvent(`chat-register-command-${uuid}`, (data) => {
    onTrigger(data)
  })
}
