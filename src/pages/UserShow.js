import React, { Component } from 'react'
import UserModel from '../models/user'
import UserCard from '../components/UserCard'

class UserShow extends Component {
    state = {
        user: {},
        currentUser: this.props.currentUser
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        UserModel.show(this.state.currentUser).then(data => {
            this.setState({ user: data.user })
        })
    }

    render() {
        return (
            <div>
                <UserCard 
                { ...this.props }
                { ...this.state.user }/>
            </div>
        )
    }
}

export default UserShow