// imports
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RatingModel from '../models/rating'
import RatingTile from '../components/RatingTile'
import { Card, ListGroup } from 'reactstrap'

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

    renderRatingInfo() {
        let ratingList = this.state.ratings.map((rating) => {
            return (
                <div className="rating-card-container">
                    <div className="rating-info" key={ rating._id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header>{ rating.businessName }</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Location: { rating.location }</ListGroup.Item>
                                <ListGroup.Item>Drink: { rating.drink }</ListGroup.Item>
                                <ListGroup.Item>Overall Rating: { rating.overallRating }</ListGroup.Item>
                                <ListGroup.Item>Drinks Rating: { rating.drinksRating }</ListGroup.Item>
                                <ListGroup.Item>Toppings Rating: { rating.toppingsRating }</ListGroup.Item>
                                <ListGroup.Item>Snacks Rating: { rating.snacksRating }</ListGroup.Item>
                                <ListGroup.Item>Service Rating: { rating.serviceRating }</ListGroup.Item>
                                <ListGroup.Item>Rewards Program: { rating.rewardsProgram }</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </div>
            )
        })

        return (
            <div className="rating-gallery">{ ratingList }</div>
        )
    }    

    render() {
        // let RatingList = this.state.ratings.map((rating, index) => {
        //     return (
        //         <Link to={`/ratings/${ rating._id }`} key={ index }>
        //             <RatingTile  {...rating} />
        //         </Link>
        //     )
        // })

        // return (
        //     <div>
        //         <h2>Ratings</h2>
        //         { this.state.ratings ? RatingList : "Loading..."}
        //     </div>
        // )

        return (
            <div className="rating-container">
                { this.renderRatingInfo() }

            </div>
        )
    }
}

export default RatingList