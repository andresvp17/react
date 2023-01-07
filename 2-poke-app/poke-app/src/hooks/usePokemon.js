import { useEffect, useState, useContext } from 'react'
import GetPokemon from '../services/GetPokemon'
import GetPokemonUrl from '../services/GetPokemonUrl'
import PokemonContext from '../context/PokemonContext'

const initialPage = 0

const usePokemon = () => {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(false)
  const { pokeContext, setPokeContext } = useContext(PokemonContext)

  let lastPage = localStorage.getItem('lastPage') ? localStorage.getItem('lastPage') : initialPage
  if (lastPage === 57) lastPage = 0

  const [page, setPage] = useState(Number.parseInt(lastPage))

  useEffect(() => {
    GetPokemon({ page })
    .then(nextPokemon => {
      setLoading(true)
        setPokemon(nextPokemon)
      })
  }, [page])

  useEffect(() => {
    Promise.all(GetPokemonUrl({ pokemon }))
      .then(res => {
        setLoading(true)
        setPokeContext(res)
        setLoading(false)
      })
  }, [pokemon, setPokeContext])

  return { pokeContext, setPage, page, pokemon, loading }
}

export default usePokemon
