
import { Sidebar } from '../../../dist'

import fixtureSidebar from '../sidebar.json'

export default async function sidebar (): Promise<void> {

  const sidebarPanel = await Sidebar.registerPanel({
    ...fixtureSidebar.panelOptions,
    onMessage: (message: string) => {
      // @ts-expect-error
      window.__messageReceived__ = message
    }
  })

  // @ts-expect-error
  window.__closePanel__ = () => {
    sidebarPanel.close()
  }

  // @ts-expect-error
  window.__focusPanel__ = () => {
    sidebarPanel.focus()
  }

  // @ts-expect-error
  window.__removePanel__ = () => {
    sidebarPanel.remove()
  }
}