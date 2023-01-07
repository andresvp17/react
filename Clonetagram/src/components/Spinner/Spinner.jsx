import React from 'react'
import styles from './styles.module.css'

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <span className={styles.spinner} />
    </div>
  )
}

export default Spinner
