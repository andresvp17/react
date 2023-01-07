import React from 'react'
import ListOfTracks from '../../components/ListOfTracks/ListOfTracks'
import styles from './styles.module.css'

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <ListOfTracks />
    </div>
  )
}

export default Home
