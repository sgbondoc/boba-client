import React, { Component } from 'react'
import axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap'

// search page: form and list
class BobaList extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        this.getBobaList('San Francisco')
    }

    componentDidUpdate (prevProps) {
        if (this.props.searchLocationTerms !== prevProps.searchLocationTerms) {
            this.setState({
                results: []
            })
            this.getBobaList(this.props.searchLocationTerms)
        }
    }

    // proxy server workaround for cors error with yelp api
    corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/"
    // search url for yelp api
    yelpSearchUrl = "https://api.yelp.com/v3/businesses/search?location="

    // request to yelp api based on location search and category endpoints
    getBobaList = (locationSearchTerms) => {
        axios.get(`${this.corsAnywhereUrl}${this.yelpSearchUrl}${locationSearchTerms}`, {
            headers: { "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}` },
            params: { categories: 'bubbletea' }
        })

        .then((response) => {
            this.setState({
                results: response.data.businesses
            })
        })

        .catch((error) => {
            console.log(error)
        })
    }

    renderBusinessInfo = () => {
        let BusinessList = this.state.results.map((result) => {
            return (
                <div className="card-container">
                    <div className="business-info" key={ result.id }>
                        <Card style={{ width: '18rem'}}>
                            <CardImg top width="100%" src={ result.image_url } alt="Boba Business"/>
                            <CardBody>
                                <CardTitle>{ result.name }</CardTitle>
                                <CardSubtitle>{ result.location.display_address[0] },{" "} 
                                    { result.location.display_address[1] },{" "}
                                    { result.location.display_address[2] }
                                    </CardSubtitle>
                                <CardText>Yelp Rating: { result.rating } </CardText>
                                <CardImg 
                                    className = "businessInfo-rating"
                                    src = { require(`../images/yelp stars/${result.rating}.png`) }
                                    alt = { `Yelp ratings: ${result.rating}/5` }
                                />
                                <CardText>{ result.review_count } Reviews</CardText>
                                <Button href={ result.url }>View on Yelp</Button>
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
            <div className="business-container">{ this.renderBusinessInfo() }</div>
        )
    }
}

export default BobaList