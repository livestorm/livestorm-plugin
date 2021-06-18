import { CameraEffectButtonOptions } from '@/types/button'

import addButtonDefaultListeners from '@/io/addButtonDefaultListeners'
import subscribeToEvent from '@/io/subscribeToEvent'

/** Register an entry in the Camera effects panel.
 *  Can be used to trigger any action (upload custom background...))
 * 
 * @example Buttons.registerCameraEffectButton({
 *   label: 'Upload a custom image',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 * 
 * @param options - DefaultButtonOptions
 */
export function registerCameraEffectButton({ onUpload, ...options }: CameraEffectButtonOptions): void {
  const uuid = addButtonDefaultListeners('register-camera-effect-button', options)

  if (options.type === "upload") {
    subscribeToEvent<{ url: string}>(`register-camera-effect-button-upload-${uuid}`, (data) => onUpload(data))
  }
}