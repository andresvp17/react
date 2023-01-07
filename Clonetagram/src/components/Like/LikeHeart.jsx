import React, { useCallback } from 'react'
import useUserSession from '../../hooks/useUserSession'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { plusLike, postALike, deleteLike, getPostLiked } from '../../backend/likesServices'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

const LikeHeart = ({ postID, likes, likesAmount, modifyLikes, loading }) => {
  const { userGlobal } = useUserSession()
  const username = userGlobal
    ? userGlobal.user.user_metadata.username.toLowerCase()
    : null

  const isLiked = likes.some(like => like.post_id === postID)

  const updateLikes = useCallback(async (method) => {
    await plusLike({ postID, currentLikes: likesAmount, method })
    await getPostLiked({ username })
      .then(({ data }) => modifyLikes(data))
  }, [])
  const addLike = useCallback(async () => await postALike({ username, postID }), [])
  const takeOutALike = useCallback(async () => await deleteLike({ id: postID }), [])

  return (
    loading
      ? <span className={styles.loadingCircle} />
      : !isLiked
          ? <AiOutlineHeart
              onClick={async () => {
                await addLike()
                await updateLikes('plus')
              }} className='icon'
            />
          : <AiFillHeart
              onClick={async () => {
                await takeOutALike({ username })
                await updateLikes('less')
              }} className='icon filled-heart'
            />

  )
}

LikeHeart.propTypes = {
  postID: PropTypes.number,
  likesAmount: PropTypes.number,
  likes: PropTypes.array,
  modifyLikes: PropTypes.func,
  loading: PropTypes.bool
}

export default React.memo(LikeHeart)
