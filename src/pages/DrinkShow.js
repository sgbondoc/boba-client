import React, { Component } from 'react'
import DrinkModel from '../models/drink'
import DrinkCard from '../components/DrinkCard'

class DrinkShow extends Component {
    state = {
        drink: {},
        currentDrink: this.props.match.params.id
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        DrinkModel.show(this.state.currentDrink).then(data => {
            this.setState({ drink: data.drink })
        })
    }

    render() {
        return (
            <div>
                <DrinkCard
                { ...this.props } 
                { ...this.state.drink }/>                
            </div>
        )
    }
}

export default DrinkShow