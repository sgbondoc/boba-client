import React from 'react'
import { Switch, Route } from 'react-router-dom'

// imports for auth
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default (props) => {
    <Switch>
        <Route path='/profile' component={ Profile }/>
        <Route path='/register' component={ Register }/>
        <Route path='/login' component={ Login }/>
    </Switch>
}