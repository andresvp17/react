import { useState, useEffect } from 'react'
import useUserSession from '../hooks/useUserSession'
import { getSavedPost } from '../backend/postServices'

const useSavePost = () => {
  const [saves, setSaves] = useState([])
  const { userGlobal } = useUserSession()
  const username = userGlobal
    ? userGlobal.user.user_metadata.username.toLowerCase()
    : null

  useEffect(() => {
    getSavedPost({ username })
      .then(({ data }) => setSaves(data))
  }, [setSaves])

  return { saves, setSaves }
}

export default useSavePost
