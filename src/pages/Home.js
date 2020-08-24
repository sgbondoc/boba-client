import React, { Component } from 'react'
import BobaList from '../components/BobaList'

class Home extends Component {
    state = {
        serachLocationQuery: null
    }

    render () {
        return (
            <div>
                <h1>Show me the Boba</h1>
            </div>
        )
    }
}

export default Home