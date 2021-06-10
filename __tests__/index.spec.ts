import Livestorm from '../src/index'

describe('index', () => {
  it('exports an object with all exposed apis', () => {
    // PubSub
    expect(Livestorm.PubSub.publish).toBeDefined()
    expect(Livestorm.PubSub.subscribe).toBeDefined()

    // Buttons
    expect(Livestorm.Buttons).toBeDefined()
    expect(Livestorm.Buttons.registerChatShareButton).toBeDefined()
    expect(Livestorm.Buttons.registerShareButton).toBeDefined()
    expect(Livestorm.Buttons.registerStageButton).toBeDefined()
    expect(Livestorm.Buttons.registerCameraEffectButton).toBeDefined()
  })
})