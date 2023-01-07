import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

const BigAvatar = ({ avatarSrc }) => {
  return (
    <div className={styles.mainBigAvatar}>
      <div className={styles.BigAvatarContainer}>
        <img
          src={avatarSrc}
          alt='Big Avatar'
          className={styles.BigAvatar}
        />
      </div>
    </div>
  )
}

BigAvatar.propTypes = {
  avatarSrc: PropTypes.string
}

export default BigAvatar
