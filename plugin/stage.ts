import { Stage } from '../dist/index'

import fixtureStage from './../cypress/fixtures/stage.json'

export default function stage (): void {
  Stage.Buttons.registerShareButton(fixtureStage.registerShareButton)
  Stage.Buttons.registerStageButton(fixtureStage.registerStageButton)
}