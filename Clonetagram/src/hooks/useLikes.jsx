import { useEffect, useState } from 'react'
import { getPostLiked } from '../backend/likesServices'
import useUserSession from '../hooks/useUserSession'

const useLikes = () => {
  const [likes, setLikes] = useState([])
  const [loading, setLoading] = useState(false)
  const { userGlobal } = useUserSession()

  const username = userGlobal
    ? userGlobal.user.user_metadata.username.toLowerCase()
    : null

  useEffect(() => {
    setLoading(true)
    getPostLiked({ username })
      .then(({ data, error }) => {
        setLikes(data)
        setLoading(false)
      })
  }, [setLikes])

  return { likes, loading, setLikes }
}

export default useLikes
