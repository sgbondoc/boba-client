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

    render() {
        return (
            <div>
                <RatingTile {...this.state.rating}/>
            </div>
        )
    }
}

export default RatingShow