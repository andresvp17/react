import React from 'react'
import styles from './styles.module.css'

const Separator = () => {
  return (
    <div className={styles.separatorContainer}>
      <span className={styles.separatorLine}></span>
      <span className={styles.separatorCenter}>O</span>
      <span className={styles.separatorLine}></span>
    </div>
  )
}

export default Separator
