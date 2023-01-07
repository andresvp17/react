import React, { useCallback, useEffect, useState } from 'react'
import { LogButton, LogForm, LogInput, LogFormContainer, SmallText } from './styles'
import useLogin from '../../hooks/useLogin'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { handleLogin, logged, error } = useLogin()

  useEffect(() => {
    if (logged) navigate('/')
  }, [navigate, logged])

  const handleSubmit = useCallback((e) => {
    if (user === '' || password === '') return
    e.preventDefault()
    handleLogin({ user, password })
  }, [handleLogin, user, password])

  return (
    <LogFormContainer>
      <Helmet><title>PokeSearch | Login</title></Helmet>
      <LogForm onSubmit={handleSubmit}>
        <LogInput
          type='text'
          placeholder='Username...'
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <LogInput
          type='password'
          placeholder='Password...'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <LogButton>Login!</LogButton>
        <SmallText>By creating an account, you agree and accept our terms and Privacy Policy</SmallText>
      </LogForm>
      {error
        ? <p>The data you passed is invalid</p>
        : null}
    </LogFormContainer>
  )
}

export default Login
