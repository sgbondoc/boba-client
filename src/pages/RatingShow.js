import React, { Component } from 'react'
import RatingModel from '../models/rating'
import RatingCard from '../components/RatingCard'

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
                <RatingCard 
                {...this.props}
                {...this.state.rating}/>
            </div>
        )
    }
}

export default RatingShow