import React from 'react'
// import { Card, ListGroup } from 'reactstrap'

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

        // <div className="rating-tile">
        //     <Card style={{ width: '18rem' }}>
        //         <Card.Header>{ props.businessName }</Card.Header>
        //         <ListGroup variant="flush">
        //             <ListGroup.Item>Location: { props.location }</ListGroup.Item>
        //             <ListGroup.Item>Drink: { props.drink }</ListGroup.Item>
        //             <ListGroup.Item>Overall Rating: { props.overallRating }</ListGroup.Item>
        //             <ListGroup.Item>Drinks Rating: { props.drinksRating }</ListGroup.Item>
        //             <ListGroup.Item>Toppings Rating: { props.toppingsRating }</ListGroup.Item>
        //             <ListGroup.Item>Snacks Rating: { props.snacksRating }</ListGroup.Item>
        //             <ListGroup.Item>Service Rating: { props.serviceRating }</ListGroup.Item>
        //             <ListGroup.Item>Rewards Program: { props.rewardsProgram }</ListGroup.Item>
        //         </ListGroup>
        //     </Card>
        // </div>
    )
}

export default RatingTile