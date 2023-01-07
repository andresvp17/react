import { useState, useEffect } from 'react'
import { getTrendingTracks } from '../services/getTrendingTracks'

const useListArtist = () => {
  const [artistList, setArtistList] = useState([])

  useEffect(() => {
    getTrendingTracks()
      .then(response => setArtistList(response))
  }, [])

  return { artistList }
}

export default useListArtist
