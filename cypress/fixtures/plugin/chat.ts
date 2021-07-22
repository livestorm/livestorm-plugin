import { Chat } from '../../../dist'

import fixtureChat from '../chat.json'

export default function chat (): void {
  // Messages
  Chat.listen(message => {
    if (message.content === fixtureChat.listen.listened) {
      Chat.broadcast({
        text: fixtureChat.listen.broadcasted
      })
    }
  })
  Chat.listen(message => {
    if (message.content === fixtureChat.listen.listened) {
      Chat.broadcast({
        text: fixtureChat.listen.broadcasted
      })
    }
  })

  const re = new RegExp(fixtureChat.intercept.regex)
  Chat.intercept(re, () => {
    //
  })

  Chat.broadcast({
    text: fixtureChat.broadcast.text
  })
  Chat.broadcast({
    html: fixtureChat.broadcast.html
  })

  Chat.send({
    user: fixtureChat.send.user,
    text: fixtureChat.send.text
  })
  Chat.send({
    user: fixtureChat.send.user,
    html: fixtureChat.send.html
  })

  // Actions
  Chat.Buttons.registerChatShareButton({
    ...fixtureChat.registerChatShareButton,
    onClick: () => {
    //
    }
  })

  Chat.registerMessageAction({
    ...fixtureChat.registerMessageAction,
    onClick: () => {
    //
    }
  })
}