import React from 'react'
import useFollow from '../../hooks/useFollow'
import useUserSession from '../../hooks/useUserSession'
import styles from './styles.module.css'
import { postAFollow, deleteAFollow, modifyFollowers, modifyFollowing } from '../../backend/followServices'
import { useParams } from 'react-router-dom'
import { RiUserFollowLine } from 'react-icons/ri'
import ProptTypes from 'prop-types'

const FollowButton = ({ followers, following }) => {
  const { userGlobal } = useUserSession()
  const { id } = useParams()
  const username = userGlobal
    ? userGlobal.user.user_metadata.username.toLowerCase()
    : null
  const { follow } = useFollow({ username })
  const isFollowing = follow.find(follow => follow.followed_user === id)
  const handleFollow = async () => isFollowing ? await deleteAFollow({ username, currentUser: id }) : await postAFollow({ username, followingUser: id })

  return (
    <button
      onClick={() => {
        handleFollow()
        modifyFollowers({ currentUser: id, isFollowing, currentFollowers: followers })
        modifyFollowing({ user: username, isFollowing, currentFollowing: following })
      }} className={`${styles.mainButton} ${!isFollowing ? styles.followButton : styles.followingButton}`}
    >
      {
      !isFollowing
        ? 'Follow'
        : <RiUserFollowLine />
      }
    </button>
  )
}

FollowButton.propTypes = {
  followers: ProptTypes.number,
  following: ProptTypes.number
}

export default FollowButton
