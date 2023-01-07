import React from 'react'
import styles from './styles.module.css'
import { AiFillHome, AiFillHeart } from 'react-icons/ai'
import { BsFillBookFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const MainMenu = () => {
  return (
    <ul className={styles.navLinks}>
      <Link to='/' className={styles.navHome}>MC</Link>
      <li className={styles.navLinkItem}>
        <AiFillHome className={styles.mainMenuIcon} /> <p className={styles.navLinkTitle}>Home</p>
      </li>
      <li className={styles.navLinkItem}>
        <AiFillHeart className={styles.mainMenuIcon} /> <p className={styles.navLinkTitle}>Favorites</p>
      </li>
      <li className={styles.navLinkItem}>
        <BsFillBookFill className={styles.mainMenuIcon} /> <p className={styles.navLinkTitle}>Playlists</p>
      </li>
    </ul>
  )
}

export default MainMenu
