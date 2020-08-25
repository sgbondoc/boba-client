import React, { Component } from 'react'

class DrinkForm extends Component {
    state = {
        drink: ''
    }

    onChange = (event) => {
        this.setState({
        drink: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        const drink = this.props.drink
        drink.body = this.state.drink
        this.props.updateDrink(drink)
        this.setState({ drink: '' })
        this.props.toggleBodyForm()
    }

    render() {
        return (
        <div style={ this.props.style } className="drink-form">
            <form onSubmit={ this.onSubmit }>
            <input
                autoFocus={ this.props.autoFocus } 
                onChange={ this.onChange }
                placeholder='Reccommend a drink here ...'
                type='text'
                value={ this.state.drink } />
            <button type='submit'>Save</button>
            </form>
        </div>
        )
    }
}

export default DrinkForm