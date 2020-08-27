import React, { Component } from 'react'
import UserModel from '../models/user'
import Login from './Login'
import {
    Container, Col, Form,
    FormGroup, Label,
    Button,
} from 'reactstrap'

const Profile = (props) => {
    return (
        <div className="profile">
            <h4>Profile</h4>
        </div>
    )
}

// class Profile extends Component {
//     state = {
//         user: {},
//         currentUser: this.props.match.params.id
//     }

//     componentDidMount() {
//         this.fetchData()
//     }

//     fetchData = () => {
//         UserModel.show(this.state.currentUser).then(data => {
//             console.log(data)
//             this.setState({ user: data.user })
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h4>Profile</h4>
//             </div>
//         )
//     }
// }

export default Profile