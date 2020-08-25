import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import BobaList from '../components/BobaList'

class Search extends Component {
    state = {
        searchLocationQuery: null
    }
    onFormSubmit = (searchLocationQuery) => {
        this.setState({
            searchLocationQuery: searchLocationQuery
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
                searchLocationQuery={ this.state.searchLocationQuery }/>
            </div>
            </>
        )
    }
}

export default Search