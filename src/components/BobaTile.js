import React from 'react'

const BobaTile = (props) => {
    return (
        <div className="boba-tile">
            <h3>{ props.name }</h3>
            <ul>
                <li>Rating: { props.rating }</li>
            </ul>
        </div>
    )
}
 
export default BobaTile