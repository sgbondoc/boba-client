import React, { Component } from 'react'
import { Button } from 'reactstrap'

class LikeButton extends Component {
    state = {
        likes: 0
    }

    increaseLikes = (event) => {
        let updateCount = this.state.likes + 1
        this.setState({ likes: updateCount })
    }

    render () {
        return (
            <Button onClick={ this.increaseLikes }>Likes: { this.state.likes }</Button>
        )
    }
}

export default LikeButton