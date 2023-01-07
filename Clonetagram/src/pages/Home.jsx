import React from 'react'
import useGlobal from '../hooks/useGlobal'
import Post from '../components/Post/Post'
import LoadingPage from '../components/LoadingPage/LoadingPage'

const Home = () => {
  const { globalInfo, loading } = useGlobal()

  return (
    <div style={{ marginTop: '60px' }}>
      {
        loading
          ? <LoadingPage />
          : <Post postInfo={globalInfo} />
      }
    </div>
  )
}

export default Home
