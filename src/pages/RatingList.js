import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RatingModel from '../models/rating'
// import RatingCard from '../components/RatingCard'
import {
    Card, CardText, CardBody,
    CardTitle, Button
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

    updateRating = (rating) => {
        const isUpdatedRating = (r) => {
            return r._id === this.rating._id
        }

        RatingModel.update(rating)
            .then(data => {
                let ratings = data.ratings
                ratings.find(isUpdatedRating).body = rating.body
            })
    }    

    render() {
        let RatingList = this.state.ratings.map((rating, index) => {
            return (
                <div className="rating-container">
                    
                    <div className="rating-info">
                    <Link to={`/ratings/${ rating._id }`} key={ index }>
                        <Card style={{ width: '18rem'}}>
                            <CardBody>
                                <CardTitle tag="h5">{ rating.businessName }</CardTitle>
                                <CardText>{ rating.location }</CardText>
                                <CardText>Overall Rating: { rating.overallRating }</CardText>
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
            {/* <RatingCard updateRating={ this.updateRating } /> */}
            </>
        )

        // let RatingList = this.state.ratings.map((rating, index) => {
        //     return (
        //         <div className="rating-container">
        //         <Link to={`/ratings/${ rating._id }`} key={ index }>
        //             <RatingCard  {...rating} />
        //         </Link>
        //         </div>
        //     )
        // })

        // return (
        //     <>
        //     <h4>Ratings</h4>
        //     <div className="rating-gallery">
        //         { this.state.ratings ? RatingList : "Loading..."}
        //     </div>
        //     </>
        // )
    }
}

export default RatingList