import React from 'react'
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'

const RatingCard = (props) => {
    return (
        <div className="rating"> 
            <Card style={{ width: '18rem' }}>
                <CardHeader>{ props.businessName }</CardHeader>
                <ListGroup variant="flush">
                    <ListGroupItem>Location: { props.location }</ListGroupItem>
                    <ListGroupItem>Drink: { props.drink }</ListGroupItem>
                    <ListGroupItem>Overall Rating: { props.overallRating }</ListGroupItem>
                    <ListGroupItem>Drinks Rating: { props.drinksRating }</ListGroupItem>
                    <ListGroupItem>Toppings Rating: { props.toppingsRating }</ListGroupItem>
                    <ListGroupItem>Snacks Rating: { props.snacksRating }</ListGroupItem>
                    <ListGroupItem>Service Rating: { props.serviceRating }</ListGroupItem>
                    <ListGroupItem>Rewards Program: { props.rewardsProgram }</ListGroupItem>
                </ListGroup>
            </Card>    
        </div>
    )

}

export default RatingCard