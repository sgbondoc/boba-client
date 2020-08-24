import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Header from './components/Header'
import Routes from './config/routes'
import './App.css'

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'))

  const storeUser = (userId) => {
    setCurrentUser({ currentUser: userId })
    localStorage.setItem('uid', userId)
  }

  return (
    <div className="App">
      <Header
        currentUser={ currentUser }
      />
      <Routes
        currentUser={ currentUser }
        storeUser={ storeUser}
      />
    </div>
  )
}

export default withRouter(App)
