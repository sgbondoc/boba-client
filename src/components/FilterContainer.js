// import React, { Component } from 'react'

// class FilterContainer extends Component {
//     state = {
//         locations: [],
//         filteredLocations: []
//     }


//     componentWillMount() {
//         this.setState({
//             locations,
//             filteredLocations: locations
//         })
//     }    

//     filterLocation = (locationFilter) => {
//         let filteredLocations = this.state.locations
//         filteredLocations = filteredLocations.filter((location) => {
//         let location = ratings.location.toLowerCase()
//         return location.indexOf(
//             locationFilter.toLowerCase()) !== -1
//         })
//         this.setState({
//         filteredLocations
//         })
//     }    
  
//     render() {
//         return (
//             <Locations locations={this.state.filteredLocations} match={this.props.match} onChange={this.filterlocations} />
//         )
//     }    
// }

// export default FilterContainer