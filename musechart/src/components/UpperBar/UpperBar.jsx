import React from 'react'
import styles from './styles.module.css'
import SearchBar from '../SearchBar/SearchBar'
import UserAvatar from '../UserAvatar/UserAvatar'

const UpperBar = () => {
  return (
    <div className={styles.upperBarContainer}>
      <SearchBar />
      <UserAvatar />
    </div>
  )
}

export default UpperBar
