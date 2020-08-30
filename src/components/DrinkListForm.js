import React, { Component } from 'react'
import DrinkModel from '../models/drink'
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

    handleSubmit = (event, form) => {
        event.preventDefault()
        let drink = this.state
        this.props.createDrink(drink)
        // DrinkModel.create(drink)
        //     .then(data => {
        //         console.log(data)
        //         this.props.history.push('/drinks')
        //         console.log("drink created")
        //     })
        this.setState({
            drink: ""
        })
        form.reset()
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