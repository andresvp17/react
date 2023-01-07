import { useState, useEffect } from 'react'
import { getRowByUser, getProfile } from '../backend/User'

const useUserData = ({ username }) => {
  const [userData, setUserData] = useState([])
  const [singleUser, setSingleUser] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getRowByUser({ username })
      .then(response => {
        const { data, error } = response
        if (error) return setError(error)
        setUserData(data)
      })
  }, [username])

  useEffect(() => {
    getProfile({ username }).then(([users, error]) => {
      if (error) return setError(error)
      setSingleUser(users)
      setLoading(false)
    })
  }, [username])
  return { userData, error, singleUser, loading }
}

export default useUserData
