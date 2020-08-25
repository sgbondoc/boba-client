import React from 'react'

const RatingTile = (props) => {
    return (
        <div className="rating-tile">
            <>
            <h3>{ props.businessName }</h3>
            <ul>
                <li>Location: { props.location }</li>
                <li>Drink: { props.drink }</li>
                <li>Overall Rating: { props.overallRating }</li>
                <li>Drinks Rating: { props.drinksRating }</li>
                <li>Toppings Rating: { props.toppingsRating }</li>
                <li>Snacks Rating: { props.snacksRating }</li>
                <li>Service Rating: { props.serviceRating }</li>
                <li>Rewards Program: { props.rewardsProgram }</li>
            </ul>
            </>
        </div>
    )
}

export default RatingTile