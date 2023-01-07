import React, { useState } from 'react'
import { loginUser } from '../../backend/User'
import { Link, useNavigate } from 'react-router-dom'
import { clsx } from 'clsx'
import styles from './styles.module.css'
import IgLogo from '../../assets/ig-letter-logo.png'
import Separator from '../Separator/Separator'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email === '' || password === '') return
    await loginUser({ email, password }).then((response) => {
      if (response.error) return window.alert('NOT CORRECT')
      setPassword('')
      setEmail('')
      navigate('/')
    }).catch((err) => {
      console.error(err)
    })
  }

  const formBtnStyle = clsx(styles.formBtn, {
    [styles.enableBtn]: email !== '' || password !== '',
    [styles.disableBtn]: email === '' || password === ''
  })

  return (
    <div>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div>
          <img className={styles.igLogo} src={IgLogo} alt='IG Logo' />
        </div>
        <div className={styles.inputContainer}>
          <input
            onChange={e => setEmail(e.target.value)}
            className={styles.input}
            type='text' name='email'
            placeholder='Your Email...'
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            onChange={e => setPassword(e.target.value)}
            className={styles.input}
            type='password' name='passoword'
            placeholder='Insert Your Password...'
          />
        </div>
        <div className={styles.formBtnContainer}>
          <button className={`${styles.formBtn} ${formBtnStyle}`}>Sign In</button>
        </div>
        <Separator />
      </form>
      <div className={styles.alreadyRegister}>
        <span className={styles.alreadyContainer}>
          <p>You don't have an account?</p>
          <Link className={styles.createAccountLink} to='/register'>Click Here</Link>
        </span>
      </div>
    </div>
  )
}

export default LoginForm
