import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import BobaList from '../components/BobaList'

// search page: form and list
class Search extends Component {
    state = {
        searchLocationTerms: null
    }

    onFormSubmit = (searchLocationTerms) => {
        this.setState({
            searchLocationTerms: searchLocationTerms
        })
    }

    render () {
        return (
            <>
            <div>
            <SearchForm onFormSubmit={ this.onFormSubmit }/>
            </div>
            <div>
            <BobaList
                searchLocationTerms={ this.state.searchLocationTerms }/>
            </div>
            </>
        )
    }
}

export default Search