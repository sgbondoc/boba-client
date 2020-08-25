import React, { Component } from 'react'

class SearchForm extends Component {
    state = {
        searchLocationQuery: ""
    }
    handleChange = (event) => {
        this.setState({
            searchLocationQuery: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.searchLocationQuery)
        this.props.onFormSubmit(this.state.searchLocationQuery)
    }

    render() {
        return (
            <div className="search-form">

                <form onSubmit={ this.handleSubmit }>
                    
                    <label
                        className="search-form-label"
                        htmlFor="location"
                        arialabel="enter address, city, or zip code">
                        Find boba now
                    </label>
                    
                    <input
                        className="search-form-input"
                        type="text"
                        id="location"
                        placeholder="address, city, or zip code"
                        value={ this.state.searchLocationQuery }
                        onChange={ this.handleChange }>
                    </input>

                    <button
                        className="search-form-button"
                        type="submit">
                        Search
                    </button>

                </form>
            </div>
        )
    }
}

export default SearchForm