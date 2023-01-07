import React from 'react'
import Home from './pages/Home/Home'
import SearchedSong from './pages/SearchSong/SearchedSong'
import MainMenu from './components/MainMenu/MainMenu'
import UpperBar from './components/UpperBar/UpperBar'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

function App () {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div className='App'>
      {
        location.pathname === '/login'
          ? null
          : location.pathname !== '/register'
            ? <MainMenu />
            : null
      }
      <div className='mainContent'>
        {
        location.pathname === '/login'
          ? null
          : location.pathname !== '/register'
            ? <UpperBar />
            : null
        }
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<LoginPage />} path='/login' />
          <Route element={<RegisterPage />} path='/register' />
          <Route element={<SearchedSong />} path='/search/:keyword' />
        </Routes>
      </div>
    </div>
  )
}

export default App
