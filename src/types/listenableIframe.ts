
export type AugmentedVariableValue = {
  value: unknown;
  inject: boolean;
  replace: boolean

}
export type VariableValue = AugmentedVariableValue | unknown

export type ListenableIframe = {
  sendMessage: (data: Record<string, unknown>) => void
  getId: () => string
}

export type ListenableIframeParams = {
  template: string,
  variables?: Record<string, VariableValue>,
  onMessage?: (arg: unknown) => unknown
}