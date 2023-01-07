import React, { useCallback } from 'react'
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs'
import { savePost } from '../../backend/postServices'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

const BookMark = ({ postid, username, saves }) => {
  const handleSavePost = useCallback(() => {
    savePost({ username, postid })
  }, [])

  const isSaved = saves.find(save => postid === save.post_id)

  return (
    <>
      {
        isSaved
          ? <BsFillBookmarkFill className={styles.icon} />
          : <BsBookmark onClick={handleSavePost} className={styles.icon} />
      }
    </>
  )
}

BookMark.propTypes = {
  postid: PropTypes.number,
  username: PropTypes.string,
  saves: PropTypes.array
}

export default BookMark
