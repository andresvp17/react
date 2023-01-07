import React from 'react'
import styles from './styles.module.css'
import useSelectedArtist from '../../hooks/useSelectedArtist'

const FavArtistCircle = ({ artist }) => {
  const { selectedArtist, setSelectedArtist } = useSelectedArtist()
  return (
    <div
      className={styles.artistCard}
      onClick={() => setSelectedArtist(!selectedArtist)}
    >
      <div className={`${styles.artistCardImageContainer}`}>
        <div className={`${selectedArtist ? styles.noDisplay : styles.artistCardSelected}`} />
        <img className={styles.artistCardImage} src={artist.images ? artist.images.background : artist.hub.image} alt='' />
      </div>
    </div>
  )
}

export default FavArtistCircle
