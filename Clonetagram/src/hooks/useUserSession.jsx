import { useEffect, useContext } from 'react'
import { supabase } from '../backend/supabase'
import { useNavigate, useLocation } from 'react-router-dom'
import globalUser from '../context/globalUserContext'

const useUserSession = () => {
  const navigate = useNavigate()
  const session = supabase.auth.session()
  const { userGlobal, setUser } = useContext(globalUser)
  const location = useLocation()

  useEffect(() => {
    if (!supabase.auth.user() && location.pathname !== '/register') return navigate('/login')
    setUser(session)
  })

  return { userGlobal }
}

export default useUserSession
