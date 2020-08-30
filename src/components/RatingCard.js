import React, { Component } from 'react'
import RatingModel from '../models/rating'
import {
    Container, Col, Form,
    FormGroup, Label,
    Button, Input
} from 'reactstrap'

class RatingCard extends Component {
    state = {
        businessName: '',
        location: '',
        drink: '',
        overallRating: '',
        drinksRating: '',
        toppingsRating: '',
        snacksRating: '',
        serviceRating: ''
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
        RatingModel.update(this.props._id, rating)
            .then(data => {
                this.props.history.push('/ratings')
            })    
    }

    render() {
        return (
            <Container className="edit-rating">
                <h4>Edit Rating</h4>
                <form onSubmit={ this.handleSubmit }>
                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <div className="rating-edit-form-input">
                                    <Label for="businessName" hidden>Business Name</Label>
                                    <Input
                                        type="text"
                                        name="businessName"
                                        placeholder={ this.props.businessName }
                                        onChange={ this.handleChange }
                                        value={ this.state.businessName }
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>      
                                <div className="rating-form-input">
                                    <Label for="location" hidden>Location</Label>
                                    <Input
                                        type="text"
                                        name="location"
                                        placeholder={ this.props.location }
                                        onChange={ this.handleChange }
                                        value={ this.state.location }
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup> 
                                <div className="rating-form-input">
                                    <Label for="drink" hidden>Drink</Label>
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
                                <div className="rating-form-input">
                                    <Label for="overallRating">Overall Rating</Label>
                                    <Input
                                        type="select"
                                        name="overallRating"
                                        onChange={ this.handleChange }
                                        value={ this.state.overallRating }>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                    </Input>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup> 
                                <div className="rating-form-input">
                                    <Label for="drinksRating">Drinks Rating</Label>
                                    <Input
                                        type="select"
                                        name="drinksRating"
                                        placeholder="Drinks Rating"
                                        onChange={ this.handleChange }
                                        value={ this.state.drinksRating }>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                    </Input>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup> 
                                <div className="rating-form-input">
                                    <Label for="toppingsRating">Toppings Rating</Label>
                                    <Input
                                        type="select"
                                        name="toppingsRating"
                                        onChange={ this.handleChange }
                                        value={ this.state.toppingsRating }>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                    </Input>        
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup> 
                                <div className="rating-form-input">
                                    <Label for="snacksRating">Snacks Rating</Label>
                                    <Input
                                        type="select"
                                        name="snacksRating"
                                        onChange={ this.handleChange }
                                        value={ this.state.snacksRating }>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                    </Input>        
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup> 
                                <div className="rating-form-input">
                                    <Label for="serviceRating">Service Rating</Label>
                                    <Input
                                        type="select"
                                        name="serviceRating"
                                        onChange={ this.handleChange }
                                        value={ this.state.serviceRating }>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                    </Input>        
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

export default RatingCard
