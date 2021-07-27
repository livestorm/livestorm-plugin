
import { Theme } from '../../../dist'

import fixtureTheme from '../theme.json'

export default function theme (): void {
  Theme.setBackground(fixtureTheme.background)
}