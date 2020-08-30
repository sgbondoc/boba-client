import React, { Component } from 'react'
import UserModel from '../models/user'
import {
    Container, Col, Form,
    FormGroup, Label,
    Button, Input
} from 'reactstrap'

class UserShow extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = (event) => {
        if (event.target.type !== "text") {
            this.setState({ completed: !this.state.completed })
        }
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let user = this.state

        UserModel.update(this.props._id, user)
            .then(data => {
                this.props.history.push('/profile')
            })    
    }

    render () {
        return (
            <Container className="edit-profile">
                <h4>Profile</h4>
                <form onSubmit={ this.handleSubmit }>
                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <div className="profile-edit-form-input">
                                    <Label for="profileName" hidden>Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder={ this.props.name }
                                        onChange={ this.handleChange }
                                        value={ this.state.name }
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <div className="profile-edit-form-input">
                                    <Label for="profileEmail" hidden>Email</Label>
                                    <Input
                                        type="text"
                                        name="email"
                                        placeholder={ this.props.email }
                                        onChange={ this.handleChange }
                                        value={ this.state.email }
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <div className="profile-edit-form-input">
                                    <Label for="profilePassword" hidden>Password</Label>
                                    <Input
                                        type="text"
                                        name="password"
                                        placeholder={ this.props.password }
                                        onChange={ this.handleChange }
                                        value={ this.state.password }
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Button type="submit">Update</Button>
                    </Form>
                </form>
            </Container> 
        )
    }
}

export default UserShow