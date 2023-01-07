import React from 'react'
import Card from '../Card/Card'
import useTrendingTracks from '../../hooks/useTrendingTracks'
import Spinner from '../Spinner/Spinner'
import styles from './styles.module.css'

const ListOfTracks = () => {
  const { tracks } = useTrendingTracks()
  return (
    tracks.length === 0
      ? <Spinner />
      : <div className={styles.listOfTracks}>
        {
          tracks.map(track => {
            return <Card trackInfo={track} key={track.key} />
          })
      }
        </div>
  )
}

export default ListOfTracks
