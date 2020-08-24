import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import RatingList from '../pages/RatingList'
import RatingShow from '../pages/RatingShow'

// imports for auth
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default (props) => (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/ratings/:id' component={ RatingShow }/>
        <Route path='/ratings' component={ RatingList }/>
        <Route path='/profile' component={ Profile }/>
        <Route path='/register' component={ Register }/>
        <Route path='/login' render={ (routeComponentProps) => {
            return <Login
                        { ...routeComponentProps }
                        storeUser={ props.storeUser }
                    />
        }}/>
    </Switch>
)