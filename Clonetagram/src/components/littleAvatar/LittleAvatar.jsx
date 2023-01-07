import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const LittleAvatar = ({ AvatarInfo, username }) => {
  return (
    !AvatarInfo
      ? null
      : <Link to={`/user/${username}`}>
        <img
          className={styles.upperbarAvatar}
          src={AvatarInfo}
          alt='Avatar'
        />
      </Link>
  )
}

LittleAvatar.propTypes = {
  AvatarInfo: PropTypes.string,
  username: PropTypes.string
}

export default React.memo(LittleAvatar)
