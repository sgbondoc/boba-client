import React, { Component } from 'react'
import DrinkModel from '../models/drink'
import {
    Container, Col, Form,
    FormGroup, Label,
    Button, Input
} from 'reactstrap'

class LikeButton extends Component {
    state = {
        drink: "",
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
        console.log(this.state, 'handleSubmit, this.state')

        let rating = this.state
        console.log(rating, 'handleSubmit, rating')

        console.log(this.props, 'handleSubmit, this.props')
        console.log(this.props._id, 'handleSubmit, this.props')

        DrinkModel.update(this.props._id, rating)
            .then(data => {
                // console.log(data)
                // let rating = data.rating
                console.log(rating, 'data ratings')
                
                this.props.history.push('/drinks')
            })    
    }

    increaseLikes = (event) => {
        let updateCount = this.state.likes + 1
        this.setState({ likes: updateCount })

        console.log(this.state, "state, button")
        console.log(this.props, "props, button")
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
                        <Col>
                            <FormGroup>
                                    <Button onClick={ this.increaseLikes }>Add Likes</Button>
                                    { " " }
                                    <Button type="submit">Update</Button>
                            </FormGroup>
                        </Col>
                    </Form>
                </form>
            </Container> 
        )
    }
}

export default LikeButton