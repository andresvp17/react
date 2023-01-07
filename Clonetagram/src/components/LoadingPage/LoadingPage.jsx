import React from 'react'
import styles from './styles.module.css'
import IGLogo from '../../assets/ig-logo.png'

const LoadingPage = () => {
  return (
    <div className={styles.LoadingContainer}>
      <img
        className={styles.Loading}
        src={IGLogo}
        alt='Logo'
      />
    </div>
  )
}

export default LoadingPage
