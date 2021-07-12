import { Stage } from '../dist/index'

export default function stage (): void {
  Stage.Buttons.registerShareButton({
    label: 'Foo:bar',
    icon: 'calendar',
    onClick: () => {
      console.log('buzz:bar')
    }
  })
}