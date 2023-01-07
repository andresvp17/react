import React, { useCallback, useState } from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { addData } from '../../db/index'

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    addData({ username, email, password })
    setUsername('')
    setEmail('')
    setPassword('')
  }, [])

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h2 className={styles.signUp}>Sign Up</h2>
        <div className={styles.inputContainer}>
          <input onChange={e => setUsername(e.target.value)} className={styles.input} type='text' autoComplete='off' name='formUsername' placeholder=' ' />
          <label className={styles.inputLabel} htmlFor='formUsername'>Username</label>
        </div>
        <div className={styles.inputContainer}>
          <input onChange={e => setEmail(e.target.value)} className={styles.input} type='email' name='formEmail' placeholder=' ' />
          <label className={styles.inputLabel} htmlFor='formEmail'>Email</label>
        </div>
        <div className={styles.inputContainer}>
          <input onChange={e => setPassword(e.target.value)} className={styles.input} type='password' autoComplete='off' name='formPassword' placeholder=' ' />
          <label className={styles.inputLabel} htmlFor='formPassword'>Password</label>
        </div>
        <button className={styles.formBtn}>Sign Up</button>
        <p className={styles.signUpText}>You already have an account?
          <Link to='/login' className={styles.signUpLink}> Sign In</Link>
        </p>
      </form>
    </div>
  )
}

export default RegisterForm
