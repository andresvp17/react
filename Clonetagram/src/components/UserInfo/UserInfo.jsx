import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import FollowButton from '../FollowButton/FollowButton'
import UserListStats from '../userListStats/UserListStats'

const UserInfo = (
  {
    username,
    postLength,
    followers,
    following,
    description
  }
) => {
  return (
    <section className={styles.infoUser}>
      <div className={styles.titleAndButton}>
        <h2 className={styles.userTitle}>{username}</h2>
        <FollowButton followers={followers} following={following} />
      </div>
      <UserListStats
        statFollowers={followers}
        statFollowing={following}
        statPosts={postLength}
      />
      <div>
        <span className={styles.description}>{description || ''}</span>
      </div>
    </section>
  )
}

UserInfo.propTypes = {
  username: PropTypes.string,
  postLength: PropTypes.number,
  followers: PropTypes.number,
  following: PropTypes.number,
  description: PropTypes.string
}

export default React.memo(UserInfo)
