import { Streams, register } from '../dist/index'

register(() => {
  Streams.Buttons.registerCameraEffectButton({
    'label': 'hello',
    onClick: () => {
      console.log('foo:bar')
    },
    type: 'button'
  })
})