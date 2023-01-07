export default async function GetPokemon ({ limit = 20, page = 0 } = {}) {
  return await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${limit * page}`)
    .then(res => res.json())
    .then(res => {
      const { results } = res
      const pokemons = results.map(pokemon => {
        const { name, url } = pokemon
        return { name, url }
      })
      return pokemons
    })
}
