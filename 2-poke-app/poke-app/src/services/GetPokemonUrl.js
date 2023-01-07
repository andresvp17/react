const GetPokemonUrl = ({ pokemon }) => {
  return pokemon.map(async element => {
    return await fetch(element.url)
      .then(res => res.json())
      .then(res => {
        const { name, id, sprites, types } = res
        const { front_default } = sprites
        return { name, id, front_default, types }
      })
  })
}
export default GetPokemonUrl
