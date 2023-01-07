import React from 'react'
import useUserData from '../hooks/useUserData'
import UserHeader from '../components/UserHeader/UserHeader'
import UserPhotos from '../components/userPhotos/userPhotos'
import styles from '../styles.module.css'
import LoadingPage from '../components/LoadingPage/LoadingPage'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
  const { id } = useParams()
  const { singleUser, userData, loading } = useUserData({ username: id })
  return (
    loading
      ? <LoadingPage />
      : <div className={styles.userProfile} style={{ marginTop: '60px' }}>
        <UserHeader info={singleUser[0]} postLength={userData.length} />
        <UserPhotos userData={userData} />
      </div>
  )
}

export default UserProfile
