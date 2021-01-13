import sendEvent from '../IO/sendEvent'

export default {
  register: ({ label, icon, onClick }: {
    label: string,
    icon: string,
    onClick: () => unknown
  }): void => {
    sendEvent({
      action: 'register-share-button',
      data:  { label, icon }
    })
  }
}