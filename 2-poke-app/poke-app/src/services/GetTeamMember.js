const getTeamMember = ({ Members }) => {
  if (!Members) return
  return Members.map(async member => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${member}`)
      .then(res => res.json())
      .then(res => {
        const { sprites, name, id } = res
        const { front_default } = sprites
        return { front_default, name, id }
      })
  })
}

export default getTeamMember
