import React from 'react'
import './index.css'

const Login = ({onLogin}) => {
  return (
    <button className="button" onClick={onLogin}>
      Login
    </button>
  )
}

export default Login
