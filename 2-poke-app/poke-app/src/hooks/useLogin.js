import { useCallback, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'
import PokemonTeamContext from '../context/PokemonTeamContext'
import LoginService from '../services/login'
import usePokemonTeam from './usePokemonTeam'

const useLogin = () => {
  const navigate = useNavigate()
  const { userContext, setUserContext } = useContext(UserContext)
  const { setTeam } = useContext(PokemonTeamContext)
  const { setMembers } = usePokemonTeam()
  const [error, setError] = useState(false)

  const logout = useCallback(() => {
    setUserContext(null)
    setTeam([])
    setMembers([])
    navigate('/')
    sessionStorage.removeItem('userContext')
  }, [setUserContext, setTeam, setMembers, navigate])

  const handleLogin = useCallback(({ user, password }) => {
    LoginService({ user, password })
      .then(res => {
        sessionStorage.setItem('userContext', JSON.stringify(res))
        setUserContext(res)
      }).catch(err => {
        console.error(err)
        sessionStorage.removeItem('userContext')
        setError(true)
      })
  }, [setUserContext])

  return {
    userContext,
    handleLogin,
    logout,
    logged: Boolean(userContext),
    error
  }
}

export default useLogin
