import { Streams, register } from '../dist/index'

register(() => {
  Streams.Buttons.registerCameraEffectButton({
    'label': 'hello',
    onClick: () => {
      console.log('foo:bar')
      console.log('check:update')
    },
    type: 'button'
  })
})