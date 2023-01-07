const GetFavorite = ({ favorites } = {}) => {
  if (!favorites) return

  return favorites.map(async favorite => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${favorite}`)
      .then(res => res.json())
      .then(res => {
        const { name, id, sprites, types } = res
        const { front_default } = sprites
        return { name, id, front_default, types }
      })
  })
}

export default GetFavorite
