import React, {useState} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [message, setMessage] = useState('Please Login')

  const handleLogin = () => {
    setIsLoggedIn(true)
    setMessage('Welcome User')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setMessage('Please Login')
  }

  return (
    <div className="container">
      <div className="home-container">
        <h1 className="heading">{message}</h1>
        <div className="button-container">
          {isLoggedIn ? (
            <Logout onLogout={handleLogout} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
