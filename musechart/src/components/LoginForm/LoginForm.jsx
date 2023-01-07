import React, { useState } from 'react'
import styles from './styles.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { verifyData } from '../../db/index.js'

const LoginForm = () => {
  const navigate = useNavigate()
  const [usernameValue, setUsernameValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const handleUsername = (e) => setUsernameValue(e.target.value)
  const handlePassword = (e) => setPasswordValue(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (verifyData({ username: usernameValue, password: passwordValue }) === true) return navigate('/')
  }

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h2 className={styles.signIn}>Sign In</h2>
        <div className={styles.inputContainer}>
          <input onChange={handleUsername} className={styles.input} type='text' autoComplete='off' name='formUsername' placeholder=' ' />
          <label className={styles.inputLabel} htmlFor='formUsername'>Username</label>
        </div>
        <div className={styles.inputContainer}>
          <input onChange={handlePassword} className={styles.input} type='password' name='formPassword' placeholder=' ' />
          <label className={styles.inputLabel} htmlFor='formPassword'>Password</label>
        </div>
        <button className={styles.formBtn}>Log In</button>
        <p className={styles.signUpText}>Don't you have an account yet?
          <Link to='/register' className={styles.signUpLink}> Sign Up</Link>
        </p>
      </form>
    </div>
  )
}

export default LoginForm
