import { Streams } from '../../../dist'

import fixtureStream from '../streams.json'

export default function streams (): void {


  Streams.registerCameraEffect(fixtureStream.registerCameraEffect)
  Streams.registerMultipleCameraEffects(fixtureStream.registerMultipleCameraEffects)

  setTimeout( () => {
    Streams.addStream({ ...fixtureStream.addStream, onMessage: () => {
      //
    }})
  }, 5000)


}