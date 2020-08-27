import React, { Component } from 'react'
import DrinkModel from '../models/drink'
import Drinks from '../components/Drinks'
import DrinksListForm from '../components/DrinksListForm'

class DrinkList extends Component {
    state = {
        drinks: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        DrinkModel.all().then((response) => {
            this.setState ({
                drinks: response.data.drinks
            })
            console.log(this.state.drinks)
        })    
    }

    createDrink = (drink) => {
        let newDrink = {
            body: drink
        }
        DrinkModel.create(newDrink).then((response) => {
            let drinks = this.state.drinks
            drinks.push(response.data)
            this.setState({ drinks: drinks })
        })
    }

    deleteDrink = (drink) => {
        DrinkModel.delete(drink).then((response) => {
            let drinks = this.state.drinks.filter((drink) => {
                return drink._id !== response.data._id
            })
            this.setState({drinks})
        })
    }

    updateDrink = (drink) => {
        const isUpdatedDrink = (t) => {
            return t._id === drink._id
        }
        DrinkModel.update(drink)
            .then((response) => {
                let drinks = this.state.drinks
                drinks.find(isUpdatedDrink).body = drink.body
                this.setState({ drinks: drinks })
            })
    }

    render () {
        return (
            <div className="drinks">
                <DrinksListForm
                    createDrink={ this.createDrink }
                />
                <Drinks 
                    drinks={ this.state.drinks }
                    updateDrink={ this.updateDrink }
                    deleteDrink={ this.deleteDrink }
                />
            </div>
        )
    }
}

export default DrinkList