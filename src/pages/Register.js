import React, { Component } from 'react'
import UserModel from '../models/user'
import {
    Container, Col, Form,
    FormGroup, Label,
    Button, Input
} from 'reactstrap'
import '../index.css'

class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2: ""
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.password !== this.state.password2) return false
        UserModel.create(this.state)
            .then(data => {
                console.log(data)
                this.setState({
                    name: "",
                    email: "",
                    password: "",
                    password2: ""
                })
                this.props.history.push('/login')
            })
    }
    render() {
        return (
            <Container className="register">
                <h4>Register</h4>
                <form onSubmit={ this.handleSubmit }>
                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <div className="register-form-group">
                                    <Label for="name" hidden>Name</Label>
                                    <Input
                                        onChange={ this.handleChange }
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        value={ this.state.name }
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <div className="register-form-group">
                                    <Label htmlFor="name" hidden>Email</Label>
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
                                <div className="register-form-group">
                                    <Label htmlFor="name" hidden>Password</Label>
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
                        <Col>
                            <FormGroup>
                                <div className="register-form-group">
                                    <Label htmlFor="password2" hidden>Confirm Password</Label>
                                    <Input
                                        onChange={ this.handleChange }
                                        type="password"
                                        id="password2"
                                        name="password2"
                                        placeholder="Confrim Password"
                                        value={ this.state.password2 }
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Button type="submit">Register</Button>     
                    </Form>
                </form>
            </Container>
        )
    }
}

export default Register