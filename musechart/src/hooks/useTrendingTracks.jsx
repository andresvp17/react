import { useState, useEffect } from 'react'
import { getTrendingTracks } from '../services/getTrendingTracks'

const useTrendingTracks = () => {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getTrendingTracks()
      .then(response => {
        setLoading(false)
        setTracks(response)
      })
  }, [])

  return { tracks, loading }
}

export default useTrendingTracks
