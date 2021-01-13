import index from '../index'

describe('index', () => {
  it('exports an object with all exposed apis', () => {
    expect(index.PubSub.publish).not.toBeNull()
    expect(index.PubSub.subscribe).not.toBeNull()
    expect(index.RegisterShareButton.register).not.toBeNull()
  })
})