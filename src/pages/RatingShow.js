import React, { Component } from 'react'
import RatingModel from '../models/rating'
import RatingTile from '../components/RatingTile'

class RatingShow extends Component {
    state = {
        rating: {},
        currentRating: this.props.match.params.id
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = () => {
        RatingModel.show(this.state.currentRating).then(data => {
            this.setState({ rating: data.rating })
        })
    }
    // updateRating = (currentRating) => {
    //     const isUpdatedRating = (t) => {
    //         return t._id === currentRating._id
    //     }
    //     RatingModel.update(currentRating)
    //         .then((response) => {
    //             let rating = this.state.rating
    //             RatingShow.find(isUpdatedRating).body = rating.body
    //             this.setState({ rating: rating })
    //         })
    // }

    render() {
        return (
            <div>
                <RatingTile {...this.state.rating}/>
            </div>
        )
    }
}

export default RatingShow