import React from 'react'
import PropTypes from 'prop-types'
import UsernameLink from '../UsernameLink/UsernameLink'
import { Link } from 'react-router-dom'
import './styles.css'

const PostUpperBar = ({ iconPhoto, username }) => {
  return (
    <div className='upper-post__container'>
      <div className='upper-icon__container'>
        <Link to={`/user/${username}`} className='upper-icon-text'>
          <img className='upper-icon' src={iconPhoto} alt='icon' />
        </Link>
        <UsernameLink username={username} />
      </div>
    </div>
  )
}

PostUpperBar.propTypes = {
  iconPhoto: PropTypes.string,
  username: PropTypes.string
}

export default React.memo(PostUpperBar)
