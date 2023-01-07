import React, { useState } from 'react'
import styles from './styles.module.css'
import ModalPort from '../PostModal/PostModal'
import PropTypes from 'prop-types'

const UserPhotos = ({ userData }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [postId, setPostId] = useState(null)

  const handleClick = ({ postID }) => {
    setPostId(postID)
    setIsOpen(true)
  }

  return (
    <>
      <div className={styles.photosContainer}>
        {
        userData.map(photo => {
          return (
            <div key={photo.post_id} className={styles.photoContainer}>
              <img onClick={() => handleClick({ postID: photo.post_id })} className={styles.photo} src={photo.posts.post} alt='Image' />
            </div>
          )
        })
      }
      </div>
      {isOpen
        ? <ModalPort postID={postId} onClose={setIsOpen} />
        : null}
    </>

  )
}

UserPhotos.propTypes = {
  userData: PropTypes.array
}

export default React.memo(UserPhotos)
