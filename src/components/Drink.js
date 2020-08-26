import React, { Component } from 'react'
import DrinkForm from './DrinkForm'

class Drink extends Component {
    state = {
        formStyle: {
            display: 'none'
        }
    }

    toggleBodyForm = () => {
        this.state.formStyle.display === 'block'
        ? this.setState({ formStyle: {display: 'none'} })
        : this.setState({ formStyle: {display: 'block'} })
    }

    deleteClickedDrink = () => {
        this.props.deleteDrink(this.props.drink)
    }

    render() {
        return (
            <li data-drinks-index={ this.props.drink._id}>
                <div>
                <span className="drink-item">
                    { this.props.drink.body }</span>
                <span
                    className='edit'
                    onClick={ this.toggleBodyForm }>
                    Edit
                </span>
                <span
                    className='remove'
                    onClick={ this.deleteClickedDrink }>
                    Remove    
                </span>
                </div>
                <DrinkForm
                    drink={ this.props.drink }
                    style={ this.state.formStyle }
                    autoFocus={ true }
                    buttonName="Update"
                    updateDrink={ this.props.updateDrink }
                    toggleBodyForm={ this.toggleBodyForm }/>
            </li>
        )
    }
}

export default Drink;