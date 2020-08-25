import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import RatingList from '../pages/RatingList'
import RatingShow from '../pages/RatingShow'
import NewRating from '../pages/NewRating'
import Search from '../pages/Search'
import DrinkList from '../pages/DrinkList'

// imports for auth
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default (props) => (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/ratings/new' component={ NewRating }/>
        <Route path='/ratings/:id' component={ RatingShow }/>
        <Route path='/ratings' component={ RatingList }/>
        <Route path='/search' component={ Search }/>
        <Route path='/drinks' component={ DrinkList }/>
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