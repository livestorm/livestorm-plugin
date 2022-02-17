import * as Buttons from './buttons'

import { ListenableIframe } from "@/types/listenableIframe"
import actsAsListenableIframe from '@/io/actsAsListenableIframe'
import { StageHTMLContentOptions } from '@/types/stage'


export async function insertHTML (options: StageHTMLContentOptions): Promise<ListenableIframe> {
  const listenableIframe =  await actsAsListenableIframe('stage-insert-html', options)

  return {
    ...listenableIframe,
  }
}

export {
  Buttons
}