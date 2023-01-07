import React from 'react'
import styles from './styles.module.css'

const UserAvatar = () => {
  const TAYLOR = 'https://img.wattpad.com/34665f0295b0195b50ba5fa18ee90ab00c2e2fd9/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4f6f7967563865746b76333368513d3d2d313237372e313638333835333733396131343334383233333034393839363436342e6a7067?s=fit&w=720&h=720'
  return (
    <div className={styles.userAvatarContainer}>
      <img className={styles.userAvatar} src={TAYLOR} alt='' />
    </div>
  )
}

export default UserAvatar
