import { message } from 'types'
import { get_players } from 'utils'

export function run (message: message, args: string[]) {
  const [plr] = get_players(args.join(' '))
  const speakerChar = message.author.Character || message.author.CharacterAdded.Wait()[0]
  const victimChar = plr.Character || plr.CharacterAdded.Wait()[0]
  speakerChar.MoveTo(((victimChar.PrimaryPart || victimChar.FindFirstChild('HumanoidRootPart') || victimChar.FindFirstChild('Torso')) as Part).Position)
}
export const help = 'teleport to a player lol'
export const aliases = ['goto']
export const permission = 2
