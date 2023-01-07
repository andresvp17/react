const GetSinglePokemon = async ({ name }) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => res.json())
    .then(res => {
      const { name, id, sprites, types, abilities, stats } = res
      const { front_default } = sprites
      return { name, id, front_default, types, abilities, stats }
    })
}

export default GetSinglePokemon
