import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RatingModel from '../models/rating'
import {
    Card, CardText, CardBody,
    CardTitle, Button, CardImg
} from 'reactstrap'

// ratings page : list, new, show, card
class RatingList extends Component {
    state = {
        ratings: []
    }

    componentDidMount() {
        this.fetchData()
    }
    
    fetchData = () => {
        RatingModel.all().then((data) => {
            this.setState({ ratings: data.ratings })
        })
    }

    render() {
        let RatingList = this.state.ratings.map((rating, index) => {
            return (
                <div className="rating-container" key={ index }>
                    <div className="rating-info">
                    <Link to={`/ratings/${ rating._id }`}>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle tag="h5">{ rating.businessName }</CardTitle>
                                <CardText>Location: { rating.location }</CardText>
                                <CardText>Drink: { rating.drink }</CardText>
                                <CardText>Overall Rating: { rating.overallRating }</CardText>
                                <div>
                                <CardImg 
                                    className="user-stars"
                                    src = {require(`../images/yelp stars/${rating.overallRating}.png`)}/>
                                </div>
                                <CardText>Drinks Rating: { rating.drinksRating }</CardText>
                                <CardText>Toppings Rating: { rating.toppingsRating }</CardText>
                                <CardText>Snacks Rating: { rating.snacksRating }</CardText>
                                <CardText>Service Rating: { rating.serviceRating }</CardText>
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
            <h4>Ratings</h4>
            <div className="rating-gallery">{ RatingList }</div>
            </>
        )
    }
}

export default RatingList