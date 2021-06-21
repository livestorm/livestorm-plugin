export interface DefaultButtonOptions {
    label: string,
    icon?: string,
    imageSource?: string,
    onClick?: (payload?: Record<string, unknown>) => unknown
}

export type StageButtonWrapper = {
    remove: () => void
}

export interface StageButtonOptions extends DefaultButtonOptions {
    tooltip?: string,
    dropdownActions?: Array<{ name?: string, label: string, imageSource?: string }>,
    dropdownActionsTextClasses?: string,
    iframe?: {
      template: string,
      variables: Record<string, unknown>,
      width: number,
      height: number,
      onMessage?: (payload?: Record<string, unknown>) => unknown,
    }
}

export interface CameraEffectButtonOptions extends DefaultButtonOptions {
    type: 'button' | 'upload'
    onUpload?: (data?: { url: string}) => unknown
}