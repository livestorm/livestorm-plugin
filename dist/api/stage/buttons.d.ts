import { DefaultButtonOptions, StageButtonOptions, StageButtonWrapper } from '../../types/button';
/** Register an entry in the Share menu for contributors.
 *  Can be used to trigger any action (sharing custom content, files, videos, etc)
 *
 * @example Stage.Buttons.registerShareButton({
 *   label: 'Share a Document',
 *   imageSource: 'http://image/image.png',
 *   onClick: () => console.log('someone clicked this button')
 * })
 *
 * @param options - DefaultButtonOptions
 */
export declare function registerShareButton(options: DefaultButtonOptions): void;
/** Register an entry in the stage actions (for contributors and participants)
   *  Can be used to trigger any action (sharing custom content, files, videos, etc)
   *
   * @example Stage.Buttons.registerStageButton({
   *   label: 'React with an emoji',
   *   icon: 'smile',
   *   dropdownActions: [{ name: '😱', label: '😱' }],
   *   onClick: (payload) => {}
   * })
   *
   * @param options - StageButtonOptions
   */
export declare function registerStageButton(options: StageButtonOptions): StageButtonWrapper;
