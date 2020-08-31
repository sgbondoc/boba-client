import React, { Component } from 'react'
import UserModel from '../models/user'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        UserModel.login(this.state)
        .then(data => {
            if (!data.user) {
                return false
            }
            this.props.storeUser(data.user)
            this.props.history.push('/ratings')
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Container className="Login">
                <h4>Login</h4>
                <form onSubmit={ this.handleSubmit }>
                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <div className="login-form-group">
                                    <Label for="email" hidden>Email</Label>
                                    <Input
                                        onChange={ this.handleChange }
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={ this.state.email }
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup> 
                                <div className="login-form-group">
                                    <Label for="password" hidden>Password</Label>
                                    <Input
                                        onChange={ this.handleChange }
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        value={ this.state.password }
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Button type="submit">Submit</Button>
                    </Form>
                </form>
            </Container>
        )
    }
}

export default Login