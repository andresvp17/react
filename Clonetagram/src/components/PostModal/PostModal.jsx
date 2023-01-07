import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import PostUpperBar from '../PostUpperBar/PostUpperBar'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Spinner from '../../components/Spinner/Spinner'

import { getSinglePost } from '../../backend/postServices'

const PostPortal = ({ postID, onClose }) => {
  const [postInfo, setPostInfo] = useState([])

  useEffect(() => {
    if (!postID) return
    getSinglePost({ postID })
      .then(({ data }) => {
        setPostInfo(data)
        console.log(data)
      })
  }, [postID])

  const handleOpening = () => onClose(prev => !prev)

  return (
    <div className={styles.moduleContainer}>
      <button className={styles.btnClose} onClick={handleOpening}>✖</button>
      {
        postID
          ? postInfo.map(info => {
            return (
              <div key={info.id}>
                <PostUpperBar
                  iconPhoto={info.users.avatar}
                  username={info.users.username}
                />
                <div className={styles.photoContainer}>
                  <img className={styles.photo} src={info.post} alt='post photo' />
                </div>
              </div>
            )
          })
          : <Spinner />
      }
    </div>
  )
}

const ModalPort = ({ onClose, postID }) => {
  if (!postID) return
  return ReactDOM.createPortal(
    <PostPortal postID={postID} onClose={onClose} />,
    document.getElementById('modal-root')
  )
}

PostPortal.propTypes = {
  postID: PropTypes.number,
  onClose: PropTypes.func
}

export default ModalPort
