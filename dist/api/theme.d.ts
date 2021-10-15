import { BackgroundColor, Breakpoints } from '../types/theme';
/**
 *
 * Allows you to customize the background color of the Room.
 * Color is defined with an HSL style.
 * Luminance is fixed in order to assert Room colors legibility
 *
 * @example Livestorm.Theme.setBackgroundColor({ hue: 255, saturation: 100 })
 *
 * @doc https://developers.livestorm.co/docs/theme#setbackgroundcolor
 *
 */
export declare function setBackgroundColor({ hue, saturation }: BackgroundColor): void;
/**
 *
 * Allows you to set an image to the background
 *
 * @example Livestorm.Theme.setBackgroundImage({ hue: 255, saturation: 100 })
 *
 * @doc https://developers.livestorm.co/docs/theme#setbackgroundimage
 *
 */
export declare function setBackgroundImage(url: string, breakpoints?: Breakpoints): void;
