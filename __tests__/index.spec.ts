import Livestorm from '../src/index'

describe('index', () => {
  it('exports PubSub correctly', () => {
    expect(Livestorm.PubSub.publish).toBeDefined()
    expect(Livestorm.PubSub.subscribe).toBeDefined()
  })

  it('exports Chat correctly', () => {
    expect(Livestorm.Chat).toBeDefined()
    expect(Livestorm.Chat.broadcast).toBeDefined()
    expect(Livestorm.Chat.Buttons).toBeDefined()
    expect(Livestorm.Chat.Buttons.registerChatShareButton).toBeDefined()
    expect(Livestorm.Chat.intercept).toBeDefined()
    expect(Livestorm.Chat.listen).toBeDefined()
    expect(Livestorm.Chat.registerMessageAction).toBeDefined()
    expect(Livestorm.Chat.send).toBeDefined()
  })

  it('exports Stage correctly', () => {
    expect(Livestorm.Stage).toBeDefined()
    expect(Livestorm.Stage.Buttons).toBeDefined()
    expect(Livestorm.Stage.Buttons.registerShareButton).toBeDefined()
    expect(Livestorm.Stage.Buttons.registerStageButton).toBeDefined()
  })

  it('exports Streams correctly', () => {
    expect(Livestorm.Streams).toBeDefined()
    expect(Livestorm.Streams.addStream).toBeDefined()
    expect(Livestorm.Streams.registerCameraEffect).toBeDefined()
    expect(Livestorm.Streams.registerMultipleCameraEffects).toBeDefined()
    expect(Livestorm.Streams).toBeDefined()
    expect(Livestorm.Streams.Buttons).toBeDefined()
    expect(Livestorm.Streams.Buttons.registerCameraEffectButton).toBeDefined()
  })

  it('exports Modal correctly', () => {
    expect(Livestorm.Modal).toBeDefined()
    expect(Livestorm.Modal.showIframe).toBeDefined()
  })

  it('exports NotificationCenter correctly', () => {
    expect(Livestorm.NotificationCenter).toBeDefined()
    expect(Livestorm.NotificationCenter.showIframe).toBeDefined()
  })

  it('exports register correctly', () => {
    expect(Livestorm.register).toBeDefined()
  })

  it('exports Storage correctly', () => {
    expect(Livestorm.Storage).toBeDefined()
    expect(Livestorm.Storage.setItem).toBeDefined()
    expect(Livestorm.Storage.getItem).toBeDefined()
  })

  it('exports Theme correctly', () => {
    expect(Livestorm.Theme).toBeDefined()
    expect(Livestorm.Theme.setBackgroundColor).toBeDefined()
    expect(Livestorm.Theme.setBackgroundImage).toBeDefined()
  })

  it('exports Users correctly', () => {
    expect(Livestorm.Users).toBeDefined()
    expect(Livestorm.Users.me).toBeDefined()
    expect(Livestorm.Users.teamMembers).toBeDefined()
    expect(Livestorm.Users.everyone).toBeDefined()
  })

  it('exports When correctly', () => {
    expect(Livestorm.When).toBeDefined()
    expect(Livestorm.When.eventEnds).toBeDefined()
    expect(Livestorm.When.eventStarts).toBeDefined()
  })
})
