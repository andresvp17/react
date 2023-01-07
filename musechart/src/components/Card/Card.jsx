import React, { useState } from 'react'
import styles from './styles.module.css'

const Card = ({ trackInfo }) => {
  const [selected, setSelected] = useState(false)
  const emoji = !selected ? '✖' : '❤️'
  return (
    <div className={styles.card}>
      <div className={styles.selectedEmoji} onClick={() => setSelected(!selected)}>{emoji}</div>
      <div className={styles.cardImageContainer}>
        <div>
          <img className={styles.cardImage} src={trackInfo.images ? trackInfo.images.coverart : trackInfo.hub.image} alt={trackInfo.title} />
        </div>
      </div>
      <div className={styles.cardTextContainer}>
        <p className={styles.cardTextArtist}>{trackInfo.subtitle}</p>
        <p className={styles.cardTextSong}>{trackInfo.title}</p>
      </div>
    </div>
  )
}

export default Card
