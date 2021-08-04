
import { PubSub } from '../../../dist'

import fixturePubSub from '../pubSub.json'

export default async function pubSub (): Promise<void> {

  PubSub.subscribe(fixturePubSub.eventName, (message) => {
    // @ts-expect-error: PUBSUB doesn't exist on type Window
    window.PUBSUB = message
  })
  
  PubSub.publish(fixturePubSub.eventName, {
    data: fixturePubSub.payload
  })   
}