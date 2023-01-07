import React from 'react'
import RegisterService from '../../services/register'
import { Formik, Form, Field } from 'formik'
import './styles.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Register = () => {
  return (
    <>
      <Helmet><title>PokeSearch | Register</title></Helmet>
      <Formik
        initialValues={{
          user: '',
          password: ''
        }}
        onSubmit={(values) => {
          RegisterService(values)
        }}
        validate={values => {
          const errors = {}

          if (!values.user) errors.user = 'Username Required'

          if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,10}$/.test(values.password)) errors.password = 'The password must have at least eight characters'

          return errors
        }}
      >
        {
                ({ handleChange, handleSubmit, isSubmitting, errors }) => {
                  return (
                    <div className='register__container'>
                      <Form className='register__form' onSubmit={handleSubmit}>
                        <Field
                          placeholder='Username...'
                          className='field__form'
                          name='user'
                          onChange={handleChange}
                        />
                        {errors.user
                          ? <small>{errors.user}</small>
                          : null}
                        <Field
                          placeholder='Password...'
                          className='field__form'
                          type='password'
                          name='password'
                          onChange={handleChange}
                        />
                        {errors.password
                          ? <small>{errors.password}</small>
                          : null}
                        <small className='small__text'>By creating an account, you agree and accept our terms and Privacy Policy</small>
                        <p className='redirect__login'>Alredy have an account? <Link className='redirect__login--link' to='/login'>Log In</Link></p>
                        <button type='submit' className='register__button' disabled={isSubmitting}>Register</button>
                      </Form>
                    </div>
                  )
                }
            }
      </Formik>
    </>
  )
}

export default Register
