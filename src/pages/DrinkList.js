import React, { Component } from 'react'
import DrinkModel from '../models/drink'
import DrinkListForm from '../components/DrinkListForm'
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap'

class DrinkList extends Component {
    state = {
        drinks: [],
        count: 1
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        DrinkModel.all().then((data) => {
            this.setState ({ drinks: data.drinks })
            console.log(this.state.drinks)
        })    
    }

    increaseLikes = (event) => {
        let count = this.state.count + 1
        this.setState({ count })
    }

    render () {
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
                <DrinkListForm {...this.props}/>
            </div>    
            <div className="drinks-gallery">{ DrinksList }</div>
            </>
        )
    }
}

export default DrinkList