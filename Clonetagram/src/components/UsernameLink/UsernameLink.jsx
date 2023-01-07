import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const UsernameLink = ({ username }) => {
  return (
    <Link className={styles.username} to={`/user/${username}`}>
      {username}
    </Link>
  )
}

UsernameLink.propTypes = {
  username: PropTypes.string
}

export default UsernameLink
