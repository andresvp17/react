import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const PhotoPost = ({ photoSource }) => {
  return (
    <div className='photo__container'>
      <img className='photo' src={photoSource} alt='post photo' />
    </div>
  )
}

PhotoPost.propTypes = {
  photoSource: PropTypes.string
}

export default PhotoPost
