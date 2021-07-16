
import { Modal } from '../dist/index'

import fixtureModal from './../cypress/fixtures/modal.json'

export default function modal (): void {
  Modal.showIframe(fixtureModal.showIframe)
}