import React, { Component } from 'react'
import RatingModel from '../models/rating'
import {
    Container, Col, Form,
    FormGroup, Label,
    Button, Input
} from 'reactstrap'
import '../index.css'

class NewRating extends Component {
    state = {
        businessName: "",
        location: "",
        drink: "",
        overallRating: "",
        drinksRating: "",
        toppingsRating: "",
        snacksRating: "",
        serviceRating: "",
        rewardsProgam: false
    }
    handleSubmit = (event) => {
        event.preventDefault()
        RatingModel.create(this.state)
            .then(data => {
                this.props.history.push('/ratings')
            })
    }
    handleChange = (event) => {
        if (event.target.type !== "text") {
            this.setState({ compeleted: !this.state.completed })
        }
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <Container className="new-rating">
                <h4>Add Rating</h4>
                <form onSubmit={ this.handleSubmit }>
                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <div className="rating-form-input">
                                    <Label for="businessName" hidden>Business Name</Label>
                                    <Input
                                        type="text"
                                        name="businessName"
                                        placeholder="Business Name"
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
                                        placeholder="Location"
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
                                        placeholder="Drink"
                                        onChange={ this.handleChange }
                                        value={ this.state.drink }
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup> 
                                <div className="rating-form-input">
                                    <Label for="overallRating" hidden>Overall Rating</Label>
                                    <Input
                                        type="number"
                                        name="overallRating"
                                        placeholder="Overall Rating"
                                        onChange={ this.handleChange }
                                        value={ this.state.overallRating }
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup> 
                                <div className="rating-form-input">
                                    <Label for="drinksRating" hidden>Drinks Rating</Label>
                                    <Input
                                        type="number"
                                        name="drinksRating"
                                        placeholder="Drinks Rating"
                                        onChange={ this.handleChange }
                                        value={ this.state.drinksRating }
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup> 
                                <div className="rating-form-input">
                                    <Label for="toppingsRating" hidden>Toppings Rating</Label>
                                    <Input
                                        type="number"
                                        name="toppingsRating"
                                        placeholder="Toppings Rating"
                                        onChange={ this.handleChange }
                                        value={ this.state.toppingsRating }
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup> 
                                <div className="rating-form-input">
                                    <Label for="snacksRating" hidden>Snacks Rating</Label>
                                    <Input
                                        type="number"
                                        name="snacksRating"
                                        placeholder="Snacks Rating"
                                        onChange={ this.handleChange }
                                        value={ this.state.snacksRating }
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup> 
                                <div className="rating-form-input">
                                    <Label for="serviceRating" hidden>Service Rating</Label>
                                    <Input
                                        type="number"
                                        name="serviceRating"
                                        placeholder="Service Rating"
                                        onChange={ this.handleChange }
                                        value={ this.state.serviceRating }
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup> 
                                <div className="rating-form-input">
                                    <Label check>
                                    <Input 
                                        type="checkbox" 
                                        id="completed" 
                                        checked={this.state.rewardsProgam} 
                                        onChange={this.handleChange} 
                                    />{ " " }
                                    Rewards Program
                                    </Label>
                                </div>
                            </FormGroup>
                        </Col>
                        <Button type="submit">Save</Button>
                    </Form>
                </form>
            </Container>
        )
    }
}

export default NewRating