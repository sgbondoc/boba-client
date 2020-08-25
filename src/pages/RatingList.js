import React, { Component } from 'react'
import RatingModel from '../models/rating'

import { Link } from 'react-router-dom'
import RatingTile from '../components/RatingTile'

class RatingList extends Component {
    state = {
        ratings: []
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = () => {
        RatingModel.all().then(data => {
            this.setState({ ratings: data.ratings })
        })
    }

    render() {
        let ratingList = this.state.ratings.map((rating, index) => {
            return (
                <Link to={`/ratings/${ rating._id }`} key={index}>
                    <RatingTile  {...rating} />
                </Link>
            )
        })

        return (
            <div>
                <h2>Ratings</h2>
                { this.state.ratings ? ratingList : "Loading..."}
            </div>
        )
    }
}

export default RatingList