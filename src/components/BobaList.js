import React, { Component } from 'react'
import axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

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
        if (this.props.searchLocationQuery !== prevProps.searchLocationQuery) {
            this.setState({
                results: [],
            }, () => this.getBusinessesFromApi(this.props.searchLocationQuery))
        }
    }

    corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/"
    yelpSearchUrl = "https://api.yelp.com/v3/businesses/search?location="

    getBusinessesFromApi = (locationSearched) => {
        this.setState({ loading: true })
        axios.get(`${this.corsAnywhereUrl}${this.yelpSearchUrl}${locationSearched}`, {
            headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`},
            params: { categories: 'bubbletea' }
        })
        .then((response) => {
            console.log(response.data.businesses)
            this.setState({
                results: response.data.businesses, loading: false
            })
        })
        .catch((err) => {
            this.setState({ 
                errorState: "Sorry there is no related information to the location you searched.",
                loading: false
            })
        })
    }
    renderEmptyState = () => {
        return (
            <h4 className="header-message">
                "Working on getting your boba list!"
            </h4>
        )
    }
    renderBusinessInfo = () => {
        let BusinessList = this.state.results.map((result) => {
            return (
                // <>
                // <div className="business-info" key={ result.id }></div>
                // <div>
                //     <h4 className="business-info-name">{result.name}</h4>
                // </div>
                // </>

                <div class="card-container">
                    <div className="business-info" key={ result.id }>
                        <Card style={{ width: '18rem'}}>
                            <CardImg top width="100%" src={ result.image_url } alt="Boba Business"/>
                            <CardBody>
                                <CardTitle>{ result.name }</CardTitle>
                                <CardSubtitle>{result.location.display_address[0]},{" "} 
                                    {result.location.display_address[1]}</CardSubtitle>
                                <CardText>Rating:</CardText>
                                <Button>View on Yelp</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>    
            )
        })
        return (
            <div className="business-gallery">{ BusinessList }</div>
        )
    }

    render () {
        return (
            <div className="business-container">
                { this.state.results.length ? this.renderBusinessInfo() : this.renderEmptyState}
                { !!this.state.errorState && 
                    <h1>{ this.state.error }</h1>
                }
            </div>
        )
    }
}

export default BobaList