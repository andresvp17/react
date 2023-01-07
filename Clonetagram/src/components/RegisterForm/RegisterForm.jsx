import React, { useState } from 'react'
import Separator from '../Separator/Separator'
import styles from './styles.module.css'
import IgLogo from '../../assets/ig-letter-logo.png'
import DropAvatar from '../DropAvatar/DropAvatar'
import { createUser, registerUser } from '../../backend/User'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [send, setSend] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      password === '' ||
      username === '') return
    await registerUser({ email, username, password })
    await createUser({ password, username })
    setSend(true)
  }
  return (
    !send
      ? <div>
        <form className={styles.RegisterForm} onSubmit={handleSubmit}>
          <div>
            <img className={styles.igLogo} src={IgLogo} alt='IG Logo' />
          </div>
          <Separator />
          <div className={styles.inputContainer}>
            <input
              onChange={e => setEmail(e.target.value)}
              className={styles.input}
              type='text' name='email'
              placeholder='Insert Your Email...'
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={e => setUsername(e.target.value)}
              className={styles.input}
              type='text' name='username'
              placeholder='Insert here you username...'
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
            <button className={`${styles.formBtn}`}>Sign Up</button>
          </div>
        </form>
        <div className={styles.alreadyRegister}>
          <span className={styles.alreadyContainer}>
            <p>Do you already have an account?</p>
            <Link className={styles.createAccountLink} to='/login'>Click Here</Link>
          </span>
        </div>
      </div>

      : <DropAvatar username={username} />
  )
}

export default RegisterForm
