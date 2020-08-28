import React, { Component } from 'react'
import DrinkModel from '../models/drink'
import DrinkCard from '../components/DrinkCard'
import DrinksListForm from '../components/DrinksListForm'
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap'

class DrinkList extends Component {
    state = {
        drinks: [],
        count: 1
    }
s
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

    increaseLikes = (event) => {
        let count = this.state.count + 1
        this.setState({ count })
    }

    render () {
        // let DrinksList = this.state.drinks.map((drink, index) => {
        //         this.state.drinks.push(<DrinkCard />)
        // })

        // return (
        //     <>
        //     <h4>Drink Now</h4>
        //     <div className="drinks">
        //         <DrinksListForm
        //             createDrink={ this.createDrink }
        //         />
        //     </div>    
        //     <div className="drinks-gallery">{ DrinkList }</div>
        //     </>
        // )

        let DrinksList = this.state.drinks.map((drink, index) => {
            return (
                <div className="drink-container">
                    <div className="drink">
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle tag="h6">{ drink.drink }</CardTitle>
                                <CardText>Likes: { this.state.count }</CardText>
                                <Button onClick={ this.increaseLikes }>Like</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            )
        })

        return (
            <>
            <h4>Drink Now</h4>
            <div className="drinks">
                <DrinksListForm
                    createDrink={ this.createDrink }
                />
            </div>    
            <div className="drinks-gallery">{ DrinksList }</div>
            </>
        )
    }
}

export default DrinkList