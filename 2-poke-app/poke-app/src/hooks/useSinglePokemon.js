import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GetSinglePokemon from '../services/GetSinglePokemon'

const useSinglePokemon = ({ name }) => {
  const navigate = useNavigate()
  const [singlePokemon, setSinglePokemon] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    GetSinglePokemon({ name })
      .then(res => setSinglePokemon(res))
      .catch(err => {
        console.error(err)
        navigate('/error')
      })
    setLoading(false)
  }, [name, navigate])

  return { singlePokemon, loading }
}

export default useSinglePokemon
