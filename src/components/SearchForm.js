import React, { Component } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'

// search page: form and list
class SearchForm extends Component {
    state = {
        searchLocationTerms: ''
    }

    handleChange = (event) => {
        this.setState({
            searchLocationTerms: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.searchLocationTerms)
    }

    render() {
        return (
            <div className="search-form"> 
                <form onSubmit={ this.handleSubmit }>    
                    <Form inline>
                        <FormGroup>  
                            <Input
                                className="search-form-input"
                                type="text"
                                id="location"
                                placeholder="Location"
                                value={ this.state.searchLocationTerms }
                                onChange={ this.handleChange }>
                            </Input>
                        </FormGroup>      
                        {' '}
                        <FormGroup>  
                            <Button
                                className="search-form-button"
                                type="submit">
                                Search
                            </Button>
                        </FormGroup>     
                    </Form>       
                </form>
            </div>
        )
    }
}

export default SearchForm