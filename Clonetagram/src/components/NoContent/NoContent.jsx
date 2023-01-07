import React from 'react'
import styles from './styles.module.css'
import noContentCat from '../../assets/noContentCat.jpg'

const NoContent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Looks like we don't have much here</h1>
      <img className={styles.img} src={noContentCat} alt='Sad Cat' />
    </div>
  )
}

export default NoContent
