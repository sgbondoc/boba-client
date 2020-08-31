import React, { Component } from 'react'
import DrinkModel from '../models/drink'
import {
    Container, Col, Form,
    FormGroup, Label,
    Button, Input
} from 'reactstrap'

// drinks page: form, list, show, card
class DrinkCard extends Component {
    state = {
        drink: '',
        likes: 0
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
        let rating = this.state

        DrinkModel.update(this.props._id, rating)
            .then(data => {
                this.props.history.push('/drinks')
            })    
    }

    render () {
        return (
            <Container className="edit-drink">
                <h4>Edit Drink</h4>
                <form onSubmit={ this.handleSubmit }>
                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <div className="drink-edit-form-input">
                                    <Label for="drinkName" hidden>Drink</Label>
                                    <Input
                                        type="text"
                                        name="drink"
                                        placeholder={ this.props.drink }
                                        onChange={ this.handleChange }
                                        value={ this.state.drink }
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

export default DrinkCard