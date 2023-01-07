import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import BigAvatar from '../BigAvatar/BigAvatar'
import UserInfo from '../UserInfo/UserInfo'
import { UserListStatsMobile } from '../userListStats/UserListStats'

const UserHeader = ({ info, postLength }) => {
  return (
    !info
      ? null
      : <>
        <header className={styles.headerContainer}>
          <BigAvatar avatarSrc={info.avatar} />
          <UserInfo
            postLength={postLength}
            username={info.username}
            followers={info.followers}
            following={info.following}
            description={info.description}
          />
        </header>
        <UserListStatsMobile
          statFollowers={info.followers}
          statFollowing={info.following}
          statPosts={postLength}
        />
        </>
  )
}

UserHeader.propTypes = {
  info: PropTypes.object,
  postLength: PropTypes.number
}

export default UserHeader
