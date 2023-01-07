import React from 'react'
import { BiComment } from 'react-icons/bi'
import BookMark from '../BookMark/BookMark'
import PropTypes from 'prop-types'
import LikeHeart from '../Like/LikeHeart'
import './styles.css'

const ActionsPost = ({ postID, likes, likesAmount, modifyLikes, likeLoading, username, saves }) => {
  return (
    <div className='actions__container'>
      <div className='comment-like__container'>
        <LikeHeart
          postID={postID}
          likes={likes}
          likesAmount={likesAmount}
          modifyLikes={modifyLikes}
          loading={likeLoading}
        />
        <BiComment className='icon' />
        <BookMark postid={postID} username={username} saves={saves} />
      </div>
    </div>
  )
}

ActionsPost.propTypes = {
  postID: PropTypes.number,
  likesAmount: PropTypes.number,
  likes: PropTypes.array,
  saves: PropTypes.array,
  modifyLikes: PropTypes.func,
  likeLoading: PropTypes.bool,
  username: PropTypes.string
}

export default React.memo(ActionsPost)
