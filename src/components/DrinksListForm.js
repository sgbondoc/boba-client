import React, { Component } from 'react';

class DrinksListForm extends Component {
    state = {
        drink: ''
    };

    onInputChange = (event) => {
        this.setState({
            drink: event.target.value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault()
        let drink = this.state.drink
        this.props.createDrink(drink)
        this.setState({
            drink: ''
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={ this.onFormSubmit } id="taskForm">
                    <input
                        onChange={ this.onInputChange }
                        type="text" id="newItemDescription"
                        placeholder="Drink suggestion..."
                        value={ this.state.drink }
                    />
                    <button type="submit" id="addTask" className="btn">Add Drink</button>
                </form>
            </div>
        );
    };
};

export default DrinksListForm