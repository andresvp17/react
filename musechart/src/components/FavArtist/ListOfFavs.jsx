import React from 'react'
import styles from './styles.module.css'
import useTrendingTracks from '../../hooks/useTrendingTracks'
import FavArtistCircle from './FavArtistCircle'

const ListOfFaves = () => {
  const { tracks } = useTrendingTracks()
  return (
    tracks.length === 0
      ? <h1>Loading...</h1>
      : <div className={styles.listOfTracksContainer}>
        {
            tracks.map(artist => {
              return <FavArtistCircle artist={artist} key={artist.key} />
            })
        }
      </div>
  )
}

export default ListOfFaves
