import React from 'react'
import PasswordInput from '../../components/input/PasswordInput'
import { Link } from 'react-router-dom'

const LoginForm = ({ placeholder, handleSubmit, setEmail, setPassword, password, email, error}) => {
  return (
    <>
         <form onSubmit={handleSubmit}>
              <h4 className='text-2xl mb-7'>Manager Login</h4>

              <input
                type="text"
                placeholder={placeholder}
                className='input-box'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

              <button type='submit' className='btn-primary'>Login</button>

              <p className='text-sm text-center mt-4'>
                Not registered yet?{' '}
                <Link to="/signup" className='font-medium text-primary underline'>
                  Create an Account
                </Link>
              </p>
            </form>
    </>
  )
}

export default LoginForm