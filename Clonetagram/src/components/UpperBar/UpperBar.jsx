import React, { Suspense } from 'react'
import { MdPostAdd } from 'react-icons/md'
import { AiOutlineHeart, AiOutlineSetting } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import igLetterLogo from '../../assets/ig-letter-logo.png'
import useProfile from '../../hooks/useProfile'
import './styles.css'

const Blank = React.lazy(() => import('../littleAvatar/LittleAvatar'))

const UpperBar = () => {
  const { profile, username } = useProfile()
  console.log(profile)
  return (
    profile.length !== 0
      ? <div className='upperbar-container'>
        <Link to='/'>
          <img src={igLetterLogo} className='letter-logo' />
        </Link>
        <div className='icons-bar'>
          <Link to='/upload'>
            <MdPostAdd className='upperbar-icon' />
          </Link>
          <Link to='/likes'>
            <AiOutlineHeart className='upperbar-icon' />
          </Link>
          <AiOutlineSetting className='upperbar-icon' />
          <Suspense fallback={<div className='fallback' />}>
            <Blank
              AvatarInfo={profile[0].avatar}
              username={username}
            />
          </Suspense>
        </div>
        </div>
      : null
  )
}

export default UpperBar
