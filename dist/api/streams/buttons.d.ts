import { CameraEffectButtonOptions } from '../../types/button';
/** Register an entry in the Camera effects panel.
 *  Can be used to trigger any action (upload custom background...))
 *
 * @example Buttons.registerCameraEffectButton({
 *   label: 'Upload a custom image',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 *
 * @doc https://developers.livestorm.co/docs/streams#registercameraeffectbutton
 */
export declare function registerCameraEffectButton({ onUpload, ...options }: CameraEffectButtonOptions): void;
