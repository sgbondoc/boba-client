import React, { Component } from 'react'
import DrinkModel from '../models/drink'
import { Form, FormGroup, Input, Button } from 'reactstrap'

class DrinkListForm extends Component {
    state = {
        drink: "",
        drinks: []
    }

    handleChange = (event) => {
        this.setState({
            drink: event.target.value
        })
        console.log(event.target.value)
        console.log(this.state.drink)
    }

    handleSubmit = (event) => {
        console.log(this.state)
        DrinkModel.create(this.state)
            .then(data => {
                this.props.history.push('/drinks')
            })
        this.setState({
            drink: ""
        })    
    }

    render() {
        return (
            <div className="drink-form"> 
                <form onSubmit={ this.handleSubmit }>
                    <Form inline>
                        <FormGroup>
                            <Input
                                type="text" 
                                id="drinkSuggestion"
                                placeholder="Suggest a drink..."
                                onChange={ this.handleChange }
                                value={ this.state.suggestedDrink }
                            />
                            <Button 
                                type="submit" 
                                id="addDrink" 
                                className="btn">
                                Add Drink
                            </Button>
                        </FormGroup>
                    </Form>  
                </form>
            </div>
        )
    }
}

export default DrinkListForm