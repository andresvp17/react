import React from 'react'
import styles from './styles.module.css'
import girlCat from '../../assets/girl-cat.png'
import chatSC from '../../assets/chat.png'
import profile from '../../assets/profile.png'
import apple from '../../assets/apple.png'

const PhonesImage = () => {
  return (
    <div className={styles.phonesContainer}>
      <div className={styles.unseen}>
        <img className={`${styles.transitionImage} ${styles.imgOne}`} src={girlCat} alt='Image One' />
        <img className={`${styles.transitionImage} ${styles.imgTwo}`} src={chatSC} alt='Image Two' />
        <img className={`${styles.transitionImage} ${styles.imgThree}`} src={profile} alt='Image three' />
        <img className={`${styles.transitionImage} ${styles.imgFour}`} src={apple} alt='Image four' />
      </div>
    </div>
  )
}

export default PhonesImage
