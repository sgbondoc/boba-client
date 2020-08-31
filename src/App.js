import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'
import Header from './components/Header'
import UserModel from './models/user'

import './App.css'

function App (props) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'))

  const storeUser = (userId) => {
    setCurrentUser({ currentUser: userId })
    localStorage.setItem('uid', userId)
  }

  const logout = (event) => {
    event.preventDefault()
    localStorage.removeItem('uid')
    UserModel.logout()
      .then(response => {
        console.log(response)
        setCurrentUser(null)
        props.history.push('/login')
      })
  }

  return (
    <div className="App">
      <Header
        currentUser={ currentUser }
        logout={ logout }
      />
      <Routes
        currentUser={ currentUser }
        storeUser={ storeUser }
      />
    </div>
  )
}

export default withRouter(App)
