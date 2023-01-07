import { useEffect, useState } from 'react'
import { getProfile } from '../backend/User'
import useUserSession from '../hooks/useUserSession'

const useProfile = () => {
  const [profile, setProfile] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { userGlobal } = useUserSession()

  const username = userGlobal
    ? userGlobal.user.user_metadata.username.toLowerCase()
    : null

  useEffect(() => {
    if (!username) return
    setLoading(true)
    getProfile({ username })
      .then(([users, error]) => {
        if (error) return setError(error)
        console.log(users)
        setProfile(users)
        setLoading(false)
      })
  }, [username])

  return { profile, error, loading, username }
}

export default useProfile
