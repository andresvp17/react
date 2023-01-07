import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import PhonesImage from '../components/PhonesImage/PhoneImage'
import styles from '../styles.module.css'

const Login = () => {
  return (
    <div className={styles.login}>
      <PhonesImage />
      <LoginForm />
    </div>
  )
}

export default Login
