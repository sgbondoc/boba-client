import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RatingModel from '../models/rating'
import RatingCard from '../components/RatingCard'

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
                <div className="rating-container">
                <Link to={`/ratings/${ rating._id }`} key={ index }>
                    <RatingCard  {...rating} />
                </Link>
                </div>
            )
        })

        return (
            <>
            <h4>Ratings</h4>
            <div className="rating-gallery">
                { this.state.ratings ? RatingList : "Loading..."}
            </div>
            </>
        )
    }
}

export default RatingList