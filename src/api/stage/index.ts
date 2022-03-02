import * as Buttons from './buttons'

import sendEvent from '@/io/sendEvent'
import actsAsListenableIframe from '@/io/actsAsListenableIframe'
import { StageCustomContentWrapper, StageCustomContentOptions } from '@/types/stage'
import subscribeToEvent from '@/io/subscribeToEvent'


export async function registerCustomContent (options: StageCustomContentOptions): Promise<StageCustomContentWrapper> {
  const listenableIframe =  await actsAsListenableIframe('stage-register-custom-content', options)

  const id = listenableIframe.getId()

  if (options.onClose) {
    subscribeToEvent(`close-stage-custom-content-${id}`, () => options.onClose())
  }

  return {
    ...listenableIframe,
    hide () {
      sendEvent({
        action: 'stage-hide-custom-content',
        data:  { id }
      })
    },
    show () {
      sendEvent({
        action: 'stage-show-custom-content',
        data:  { id }
      })
    },
    remove () {
      sendEvent({
        action: 'stage-remove-custom-content',
        data:  { id }
      })
    },
  }
}

export {
  Buttons
}