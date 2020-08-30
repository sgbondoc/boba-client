import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RatingModel from '../models/rating'
import {
    Card, CardText, CardBody,
    CardTitle, Button, CardImg
} from 'reactstrap'

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
            console.log(this.state.ratings)
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
                                <span>
                                <CardImg 
                                    className="user-stars"
                                    src = {require(`../images/yelp stars/${rating.overallRating}.png`)}/>
                                </span>
                                <CardText>Drinks Rating: { rating.overallRating }</CardText>
                                <CardText>Toppings Rating: { rating.overallRating }</CardText>
                                <CardText>Snacks Rating: { rating.overallRating }</CardText>
                                <CardText>Service Rating: { rating.overallRating }</CardText>
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