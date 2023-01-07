import { useEffect, useState } from 'react'

const useSelectedArtist = () => {
  const [selectedArtist, setSelectedArtist] = useState(false)

  useEffect(() => {
    setSelectedArtist(!selectedArtist)
  }, [])

  return { selectedArtist, setSelectedArtist }
}

export default useSelectedArtist
