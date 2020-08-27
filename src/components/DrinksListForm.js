import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'

class DrinksListForm extends Component {
    state = {
        suggestedDrink: ""
    }

    handleChange = (event) => {
        this.setState({
            suggestedDrink: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let drink = this.state.suggestedDrink
        this.props.createDrink(drink)
        this.setState({
            suggestedDrink: ""
        })
    }

    render() {
        return (
            <div className="drink-form"> 
                <form onSubmit={ this.handleSubmit }>
                    <Form inline>
                        <FormGroup>
                            <Input
                                onChange={ this.handleChange }
                                type="text" 
                                id="drinkSuggestion"
                                placeholder="Drink suggestion"
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

export default DrinksListForm