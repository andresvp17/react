import React from 'react'
import useLikedPosts from '../hooks/useLikedPosts'
import LoadingPage from '../components/LoadingPage/LoadingPage'
import { LikedPost } from '../components/Post/Post'

const LikedPosts = () => {
  const { likedPosts, loading } = useLikedPosts()
  return (
    loading
      ? <LoadingPage />
      : <LikedPost postInfo={likedPosts} />
  )
}

export default LikedPosts
