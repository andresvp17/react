import React, { Suspense } from 'react'
import UpperBar from './components/UpperBar/UpperBar'
import Home from './pages/Home'
import Upload from './pages/Upload'
import UserProfile from './pages/UserProfile'
import Login from './pages/Login'
import Register from './pages/Register'
import LoadingPage from './components/LoadingPage/LoadingPage'
import LikedPosts from './pages/LikedPosts'
import { GlobalContextProvider } from './context/globalContext'
import { GlobalUser } from './context/globalUserContext'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

function App () {
  const location = useLocation()
  return (
    <div style={{ marginTop: '60px' }}>
      <Suspense fallback={<LoadingPage />}>
        <GlobalContextProvider>
          <GlobalUser>
            {
              location.pathname !== '/login'
                ? <UpperBar />
                : null
            }
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/upload' element={<Upload />} />
              <Route path='/user/:id' element={<UserProfile />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/likes' element={<LikedPosts />} />
            </Routes>
          </GlobalUser>
        </GlobalContextProvider>
      </Suspense>
    </div>
  )
}

export default App
