import { Chat, Players } from '@rbxts/services'
import notifEv from 'notify'
import { Bot, Message } from 'types'
import { getPlayers } from 'utils'

export function run (message: Message, [people, ...args]: string[], bot: Bot, permission: number) {
  getPlayers(people).forEach(plr => {
    if ((bot.ranks.get(bot.rankOf.get(plr) || 'Player') || {permission: 0}).permission < permission) {
      plr.Kick(args.join(' ').trim().size() > 0 ? args.join(' ') : 'Kicked.')
    } else {
      notifEv.FireClient(message.author, {
        Title: bot.brand,
        Text: `${plr.Name}'s permission is equal to or higher than your rank.`
      })
    }
  })
}

export const desc = 'kicked'
export const permission = 3