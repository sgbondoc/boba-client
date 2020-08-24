import React, { Component } from 'react'
import axios from 'axios'

class BobaList extends Component {
    state = {
        results: [],
        errorState: null,
        loading: false
    }
    componentDidMount () {
        this.getBusinessesFromApi('San Francisco')
    }
    componentDidUpdate (prevProps, prevState) {
        if (this.props.serachLocationQuery !== prevProps.serachLocationQuery) {
            this.setState({
                results: [],
            }, () => this.getBusinessesFromApi(this.props.serachLocationQuery))
        }
    }

    corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/"
    yelpSearchUrl = "https://api.yelp.com/v3/businesses/search?location="

    getBusinessesFromApi = (locationSearched) => {
        this.setState({ loading: true })
        axios.get(`${this.corsAnywhereUrl}${this.yelpSearchUrl}${locationSearched}`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            },
            params: {
                categories: "bubbletea"
            }
        }).then((response) => {
            console.log(response.data.businesses)
            this.setState({
                results: response.data.businesses, loading: false
            })
        }).catch((err) => {
            this.setState({ 
                errorState: "Sorry there is no related information to the location you searched.",
                loading: false
            })
        })
    }
    renderEmptyState = () => {
        return (
            <h2 className="header-message">
                "Working on getting your boba list!"
            </h2>
        )
    }
    renderBusinessInfo = () => {
        const BusinessList = this.state.results.map((result, index) => {
            return (
                <>
                <div className="business-info" key={ index }></div>
                <div>
                    <h2 className="header-message RestaurantInfo__name">{result.name}</h2>
                </div>
                </>
            )
        })
        return (
            <div className="business-gallery">{ BobaList }</div>
        )
    }

    render () {
        return (
            <section className="business-list">
                { this.state.results.length ? this.renderBusinessInfo() : this.renderEmptyState}
                { !!this.state.errorState && 
                    <h1>{ this.state.error }</h1>
                }
            </section>
        )
    }
}

export default BobaList