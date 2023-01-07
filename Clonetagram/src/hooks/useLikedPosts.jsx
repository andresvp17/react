import { useState, useEffect } from 'react'
import { getAllLikedPosts } from '../backend/likesServices'
import useUserSession from '../hooks/useUserSession'

const useLikedPosts = () => {
  const { userGlobal } = useUserSession()
  const [loading, setLoading] = useState(false)
  const [likedPosts, setLikedPosts] = useState([])

  const username = userGlobal
    ? userGlobal.user.user_metadata.username.toLowerCase()
    : null

  useEffect(() => {
    setLoading(true)
    getAllLikedPosts({ username })
      .then(({ data, error }) => {
        console.log(data)
        setLikedPosts(data)
        setLoading(false)
      })
  }, [setLikedPosts])

  return { likedPosts, loading, setLikedPosts }
}

export default useLikedPosts
