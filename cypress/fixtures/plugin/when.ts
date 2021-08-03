
import { When} from '../../../dist'

export default function when (): void {
  // @ts-expect-error: eventStarted doesn't exist on type Window
  window.eventStarted = false
  // @ts-expect-error: eventStarted doesn't exist on type Window
  window.eventEnded = false

  When.eventStarts(() => {
    // @ts-expect-error: eventStarted doesn't exist on type Window
    window.eventStarted = true
  })
  When.eventEnds(() => {
    // @ts-expect-error: eventEnded doesn't exist on type Window
    window.eventEnded = true
  })
}