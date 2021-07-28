
import { Storage } from '../../../dist'

import fixtureStorage from '../storage.json'

export default async function storage (): Promise<void> {
  const key = `key-${Date.now().toString()}`
  await Storage.setItem(key, fixtureStorage.value)

  const result = await Storage.getItem(key)

  // @ts-expect-error: RESULT doesn't exist on type Window
  window.RESULT = result
}