import { Background } from '../types/theme';
/**
 *
 * Allows you to customize the background color of the Room.
 * Color is defined with an HSL style.
 * Luminance is fixed in order to assert Room colors legibility
 *
 * @example Livestorm.Theme.setBackground({ hue: 255, saturation: 100 })
 *
 * @doc https://developers.livestorm.co/docs/theme#setbackground
 *
 */
export declare function setBackground({ hue, saturation }: Background): void;
