import React from 'react'
import PostUpperBar from '../PostUpperBar/PostUpperBar'
import PhotoPost from '../PhotoPost/PhotoPost'
import ActionsPost from '../ActionsPost/ActionsPost'
import CommentsPost from '../CommentsPost/CommentsPost'
import NoContent from '../NoContent/NoContent'
import useLikes from '../../hooks/useLikes'
import useSavePost from '../../hooks/useSavePost'
import PropTypes from 'prop-types'
import './styles.css'

const Post = ({ postInfo }) => {
  const { likes, setLikes, loading } = useLikes()
  const { saves } = useSavePost()
  return (
    postInfo.map(info => {
      return (
        <div className='post__container' key={info.id}>
          <PostUpperBar
            iconPhoto={info.users.avatar}
            username={info.users.username}
          />
          <PhotoPost photoSource={info.post} />
          <ActionsPost
            postID={info.id}
            likes={likes}
            likesAmount={info.likes}
            modifyLikes={setLikes}
            likeLoading={loading}
            username={info.users.username}
            saves={saves}
          />
          <CommentsPost
            postDescription={info.description}
            likes={info.likes}
          />
        </div>
      )
    })
  )
}

export const SecondPost = ({ postInfo }) => {
  const { likes } = useLikes()
  const { saves } = useSavePost()
  return (
    postInfo.length === 0
      ? <NoContent />
      : postInfo.map(info => {
        return (
          <div className='post__container' key={info.id}>
            <PostUpperBar
              iconPhoto={info.users.avatar}
              username={info.users.username}
            />
            <PhotoPost photoSource={info.posts.post} />
            <ActionsPost
              postID={info.posts.id}
              likes={likes}
              likesAmount={info.posts.likes}
              username={info.users.username}
              saves={saves}
            />
            <CommentsPost
              postDescription={info.posts.description}
              username={info.users.username}
              likes={info.posts.likes}
            />
          </div>
        )
      })
  )
}

Post.propTypes = {
  postInfo: PropTypes.array
}

SecondPost.propTypes = {
  postInfo: PropTypes.array
}

export const LikedPost = React.memo(SecondPost)
export default React.memo(Post)
