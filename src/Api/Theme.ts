import sendEvent from '../IO/sendEvent'

export default {
  /**
  * Allows you to customize the background color of the Room.
  * Color is defined with an HSL style
  *
  * @example Livestorm.Theme.setBackground({ hue: 255, saturation: 100 })
  *
  * @param hue - A number between 0 and 360
  * @param saturation - A percentage between 0 and 100
  * 
  */
  setBackground({ hue, saturation }: {
    hue: Number,
    saturation: Number
  }): void {
    sendEvent({
      action: 'theme-set-background',
      data:  { hue, saturation }
    })
  }
}
