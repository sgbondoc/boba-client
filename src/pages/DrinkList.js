import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DrinkModel from '../models/drink'
import DrinkListForm from '../components/DrinkListForm'
import { Card , CardBody, CardTitle } from 'reactstrap'
import Button from 'reactstrap/lib/Button'

// drinks page: form, list, show, card
class DrinkList extends Component {
    state = {
        drinks: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        DrinkModel.all().then((data) => {
            this.setState ({ drinks: data.drinks })
        })    
    }

    createDrink = (drink) => {
        DrinkModel.create(drink)
            .then(data => {
                let drinks = this.state.drinks
                drinks.push(drink)
                this.setState({ drinks: drinks })
                this.props.history.push('/drinks')
            })
    }

    render () {
        let DrinksList = this.state.drinks.map((drink, index) => {
            return (
                <div className="drink-container" key={ index }>
                    <div className="drink">
                        <Link to={`/drinks/${ drink._id }`}>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle tag="h6">{ drink.drink }</CardTitle>
                                <Button>Edit</Button>
                            </CardBody>
                        </Card>
                    </Link>
                    </div>
                </div>
            )
        })

        return (
            <>
            <h4>Drink Now</h4>
            <div className="drinks">
                <DrinkListForm 
                { ...this.props }
                createDrink={ this.createDrink }/>
            </div>    
            <div className="drinks-gallery">{ DrinksList }</div>
            </>
        )
    }
}

export default DrinkList