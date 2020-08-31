import { Players } from '@rbxts/services'

const banMessage = "You've been banned!"

type PlayerArray = (number | string)[]
export = ({ banland, ranks }: {
  ranks: {
    [key: string]: {
      permission: number
      // IDs/usernames of players who should have this rank.
      people?: PlayerArray
    }
    Owner: {
      permission: number,
      people: undefined
    }
  }

  // People who are perm-banned.
  banland?: PlayerArray
}) => {
  if (banland) {
    banland.forEach(idOrString => {
      if (typeof idOrString === 'string') {
        const stringPlayer = Players.GetPlayers().find(player=>player.Name === idOrString) // stupid typescript
        if (stringPlayer) stringPlayer.Kick(banMessage)
      } else if (typeof idOrString === 'number') {
        const idPlayer = Players.GetPlayerByUserId(idOrString)
        if (idPlayer) idPlayer.Kick(banMessage)
      }
    })
  }
  return 'nothing.'

}
