import { plrCommand } from 'utils'
export const run = plrCommand(plr => {
  const char = plr.Character
  if (!char) return
  const part = char.PrimaryPart
  if (!part) return
  const cframe = part.CFrame
  plr.LoadCharacter()
  wait()
  plr.Character!.SetPrimaryPartCFrame(cframe)
})
export const desc = 'respawn people i guess'
export const permission = 2
export const aliases = ['refresh', 'sr']