import React, { Component } from 'react'
import RatingModel from '../models/rating'

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
            <div>

                <h2>Add Rating</h2>

                <form onSubmit={ this.handleSubmit }>

                    <div className="rating-form-input">
                        <label htmlFor="businessName">Business Name</label>
                        <input
                            type="text"
                            name="businessName"
                            onChange={ this.handleChange }
                            value={ this.state.businessName }
                        />
                    </div>

                    <div className="rating-form-input">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            name="location"
                            onChange={ this.handleChange }
                            value={ this.state.location }
                        />
                    </div>

                    <div className="rating-form-input">
                        <label htmlFor="drink">Drink</label>
                        <input
                            type="text"
                            name="drink"
                            onChange={ this.handleChange }
                            value={ this.state.drink }
                        />
                    </div>

                    <div className="rating-form-input">
                        <label htmlFor="overallRating">Overall Rating</label>
                        <input
                            type="number"
                            name="overallRating"
                            onChange={ this.handleChange }
                            value={ this.state.overallRating }
                        />
                    </div>

                    <div className="rating-form-input">
                        <label htmlFor="drinksRating">Drinks Rating</label>
                        <input
                            type="number"
                            name="drinksRating"
                            onChange={ this.handleChange }
                            value={ this.state.drinksRating }
                        />
                    </div>

                    <div className="rating-form-input">
                        <label htmlFor="toppingsRating">Toppings Rating</label>
                        <input
                            type="number"
                            name="toppingsRating"
                            onChange={ this.handleChange }
                            value={ this.state.toppingsRating }
                        />
                    </div>
                    
                    <div className="rating-form-input">
                        <label htmlFor="snacksRating">Snacks Rating</label>
                        <input
                            type="number"
                            name="snacksRating"
                            onChange={ this.handleChange }
                            value={ this.state.snacksRating }
                        />
                    </div>

                    <div className="rating-form-input">
                        <label htmlFor="serviceRating">Service Rating</label>
                        <input
                            type="number"
                            name="serviceRating"
                            onChange={ this.handleChange }
                            value={ this.state.serviceRating }
                        />
                    </div>

                    <div className="rating-form-input">
                        <label htmlFor="rewardsProgram">Rewards Program</label>
                        <input 
                            type="checkbox" 
                            id="completed" 
                            checked={this.state.rewardsProgam} 
                            onChange={this.handleChange} 
                        />
                    </div>

                    <input type="submit" value="Save"/>

                </form>

            </div>
        )
    }
}

export default NewRating