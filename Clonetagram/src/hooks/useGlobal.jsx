import { useState, useEffect, useContext } from 'react'
import globalContext from '../context/globalContext'
import { getPosts } from '../backend/postServices'

const useGlobal = () => {
  const { globalInfo, setGlobal } = useContext(globalContext)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getPosts().then(([posts, error]) => {
      if (error) setError(error)
      setGlobal(posts)
      setLoading(false)
    })
  }, [])

  return { globalInfo, error, loading }
}

export default useGlobal
