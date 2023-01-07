import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

const UserListStats = ({ statFollowers, statPosts, statFollowing }) => {
  return (
    <ul className={styles.statsList}>
      <li className={styles.stat}>
        <strong>
          {statPosts}
        </strong> Posts
      </li>
      <li className={styles.stat}>
        <strong>
          {statFollowers}
        </strong> Followers
      </li>
      <li className={styles.stat}>
        <strong>
          {statFollowing}
        </strong> Following
      </li>
    </ul>
  )
}

export const UserListStatsMobile = ({ statFollowers, statPosts, statFollowing }) => {
  return (
    <ul className={styles.statsListMobile}>
      <li className={styles.stat}>
        <strong>
          {statPosts}
        </strong> Posts
      </li>
      <li className={styles.stat}>
        <strong>
          {statFollowers}
        </strong> Followers
      </li>
      <li className={styles.stat}>
        <strong>
          {statFollowing}
        </strong> Following
      </li>
    </ul>
  )
}

UserListStats.propTypes = {
  statFollowers: PropTypes.number,
  statFollowing: PropTypes.number,
  statPosts: PropTypes.number
}

UserListStatsMobile.propTypes = {
  statFollowers: PropTypes.number,
  statFollowing: PropTypes.number,
  statPosts: PropTypes.number
}

export default UserListStats
