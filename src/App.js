import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'
import Header from './components/Header'
import UserModel from './models/user'
import Dots from './components/Dots'
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
      <Grid>
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
      </Grid>
    </div>
  )
}

function Grid({ children }) {
  return (
    <div className="grid">
      <LoadingBox>{children}</LoadingBox>
    </div>
  )
}

function LoadingBox({ children }) {
  return React.Children.map(children, child => {
    return <div className="loading-box">{child}</div>;
  })
}



export default withRouter(App)
