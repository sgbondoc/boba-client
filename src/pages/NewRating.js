import React, { Component } from 'react'
import RatingModel from '../models/rating'
import {
    Container, Col, Form,
    FormGroup, Label,
    Button,
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
                                    <Label htmlFor="businessName" hidden>Business Name</Label>
                                    <input
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
                                    <Label htmlFor="location" hidden>Location</Label>
                                    <input
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
                                    <Label htmlFor="drink" hidden>Drink</Label>
                                    <input
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
                                    <Label htmlFor="overallRating" hidden>Overall Rating</Label>
                                    <input
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
                                    <Label htmlFor="drinksRating" hidden>Drinks Rating</Label>
                                    <input
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
                                    <Label htmlFor="toppingsRating" hidden>Toppings Rating</Label>
                                    <input
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
                                    <Label htmlFor="snacksRating" hidden>Snacks Rating</Label>
                                    <input
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
                                    <Label htmlFor="serviceRating" hidden>Service Rating</Label>
                                    <input
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
                                    <Label htmlFor="rewardsProgram">Rewards Program</Label>
                                    <input 
                                        type="checkbox" 
                                        id="completed" 
                                        checked={this.state.rewardsProgam} 
                                        onChange={this.handleChange} 
                                    />
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