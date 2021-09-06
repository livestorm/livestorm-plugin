
import { Modal } from '../../../dist'

import fixtureModal from '../modal.json'

export default function modal (): void {
  Modal.showIframe({
    ...fixtureModal.showIframe, 
    onMessage: message => {
      // @ts-expect-error: MESSAGE_RECEIVED doesn't exist on type Window
      window.MESSAGE_RECEIVED = message
    }
  })
}