import { useContext, useEffect, useState } from 'react'
import GetFavorite from '../services/GetFavorite'
import UpdateContext from '../context/PokemonFavoriteContext'

const useFavoritePokemon = () => {
  const [fav, setFav] = useState([])
  const [favLoading, setFavLoading] = useState(false)
  const { favorites } = useContext(UpdateContext)

  useEffect(() => {
    setFavLoading(true)
    Promise.all(GetFavorite({ favorites }))
      .then(res => {
        setFav(res)
        setFavLoading(false)
      })
  }, [favorites])

  return { fav, favLoading }
}

export default useFavoritePokemon
