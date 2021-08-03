
import { Users } from '../../../dist'

export default async function users (): Promise<void> {
  const me = await Users.me()
  const everyone = await Users.everyone()
  const teamMembers = await Users.teamMembers()

  // @ts-expect-error: ME doesn't exist on type Window
  window.ME = me

  // @ts-expect-error: EVERYONE doesn't exist on type Window
  window.EVERYONE = everyone

  // @ts-expect-error: TEAM_MEMBERS doesn't exist on type Window
  window.TEAM_MEMBERS = teamMembers
}
