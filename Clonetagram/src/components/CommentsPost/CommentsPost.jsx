import React, { useRef, useCallback } from 'react'
import useComment from '../../hooks/useComment'
import useUserSession from '../../hooks/useUserSession'
import PropTypes from 'prop-types'
import './styles.css'

const CommentsPost = ({ postDescription, likes }) => {
  const textRef = useRef(null)
  const { userGlobal } = useUserSession()
  const username = userGlobal
    ? userGlobal.user.user_metadata.username.toLowerCase()
    : null
  const { comments, setComments } = useComment({ comment: textRef.current })

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    const newComment = `${textRef.current.value}`
    const newComments = [...comments.concat(newComment)]
    if (textRef.current.value === '') return
    setComments(newComments)
    textRef.current.value = ''
  }, [])

  return (
    <div className='comments__container'>
      <div className='username__container'>
        <span className='username'>{username}</span>
        <span className='username-comment'>{postDescription}</span>
      </div>
      <p className='likes-amount'> Liked by {likes} people</p>
      {
          comments.length === 0
            ? null
            : <div>
              {
                comments.map((comment, i) => {
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                      <strong>{username}</strong> <p style={{ marginLeft: '8px' }}>{comment}</p>
                    </div>
                  )
                })
              }
            </div>
        }
      <form
        className='post-comment__container'
        onSubmit={e => handleSubmit(e)}
      >
        <textarea
          className='post-comment'
          placeholder='Add a comment...'
          autoComplete='off'
          autoCorrect='off'
          ref={textRef}
        />
        <button className='post-comment-btn'>Publish</button>
      </form>
    </div>
  )
}

CommentsPost.propTypes = {
  postDescription: PropTypes.string,
  likes: PropTypes.number
}

export default React.memo(CommentsPost)
