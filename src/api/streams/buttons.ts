import { CameraEffectButtonOptions } from '@/types/button'

import addButtonDefaultListeners from '@/io/addButtonDefaultListeners'
import subscribeToEvent from '@/io/subscribeToEvent'

/** Register an entry in the Camera effects panel.
 *  Can be used to trigger any action (upload custom background...))
 * 
 * @exemple Buttons.registerCameraEffectButton({
 *   label: 'Upload a custom image',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 * 
 * @param options - DefaultButtonOptions
 */
export function registerCameraEffectButton(options: CameraEffectButtonOptions): void {
  const uuid = addButtonDefaultListeners('register-camera-effect-button', options)
  subscribeToEvent(`register-camera-effect-button-upload-${uuid}`, () => options.onUpload())
}