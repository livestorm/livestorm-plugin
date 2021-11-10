import { PanelOptions } from '@/types/sidebar'


import { v4 as uuidv4 } from 'uuid'
import sendEvent from '@/io/sendEvent'

export function registerPanel(options: PanelOptions) {
  const uuid = uuidv4()
  sendEvent({
    action: 'register-sidebar-panel',
    data: { ...options, id: uuid }
  })
}