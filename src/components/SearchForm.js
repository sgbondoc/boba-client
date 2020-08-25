import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

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
        this.props.onFormSubmit(this.state.searchLocationQuery)
    }

    render() {
        return (
            <div className="search-form"> 
                <form onSubmit={ this.handleSubmit }>    
                    <Form inline>
                        {/* <FormGroup>   
                            <Label
                                className="search-form-label"
                                htmlFor="location"
                                arialabel="enter address, city, or zip code">
                                Find Boba
                            </Label>
                        </FormGroup>      
                        {' '} */}
                        <FormGroup>  
                            <Input
                                className="search-form-input"
                                type="text"
                                id="location"
                                placeholder="Location"
                                value={ this.state.searchLocationQuery }
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