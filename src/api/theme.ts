import { AppSelectors, BackgroundColor, Breakpoints } from '@/types/theme'

import sendEvent from '@/io/sendEvent'


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
export function setBackgroundColor({ hue, saturation }: BackgroundColor): void {
  sendEvent({
    action: 'theme-set-background',
    data:  { hue, saturation }
  })
}

/**
 * 
 * Allows you to set an image to the background
 *
 * @example Livestorm.Theme.setBackgroundImage({ hue: 255, saturation: 100 })
 *
 * @doc https://developers.livestorm.co/docs/theme#setbackgroundimage
 * 
 */
export function setBackgroundImage(url: string, breakpoints: Breakpoints = {}): void {
  const style = document.createElement('style')
  style.innerHTML = `
      ${AppSelectors.RoomContent} {
        background-image: url('${url}');
        background-size: cover;
        background-position: center center;
      }

      ${breakpoints.sm ? `@media (min-width: 640px) {
          ${AppSelectors.RoomContent} {
            background-image: url('${breakpoints.sm}');
          }
        }`: ''}

      ${breakpoints.md ? `@media (min-width: 768px) {
          ${AppSelectors.RoomContent} {
            background-image: url('${breakpoints.md}');
          }
        }`: ''}

      ${breakpoints.lg ? `@media (min-width: 1024px) {
          ${AppSelectors.RoomContent} {
            background-image: url('${breakpoints.lg}');
          }
        }`: ''}

      ${breakpoints.xl ? `@media (min-width: 1280px) {
          ${AppSelectors.RoomContent} {
            background-image: url('${breakpoints.xl}');
          }
        }`: ''}
  `

  window.parent.document.body.append(style)
}