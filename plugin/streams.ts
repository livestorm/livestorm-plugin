import { Streams } from '../dist/index'

import fixtureStream from './../cypress/fixtures/streams.json'

export default function streams (): void {
  Streams.registerCameraEffect(fixtureStream.registerCameraEffect)
  Streams.registerMultipleCameraEffects(fixtureStream.registerMultipleCameraEffects)
}