import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'

class DrinkListForm extends Component {
    state = {
        drink: ""
    }

    handleChange = (event) => {
        this.setState({
            drink: event.target.value
        })
    }

    handleSubmit = (event ) => {
        event.preventDefault()
        let drink = this.state
        this.props.createDrink(drink)
        this.setState({
            drink: ""
        })
        console.log("drinklist form done")
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
                                value={ this.state.drink }
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