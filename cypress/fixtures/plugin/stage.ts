import { Stage } from '../../../dist'

import fixtureStage from '../stage.json'

export default function stage (): void {
  Stage.Buttons.registerShareButton(fixtureStage.registerShareButton)
  Stage.Buttons.registerStageButton(fixtureStage.registerStageButton)
}