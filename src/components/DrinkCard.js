import React from 'react'
import Drink from './Drink'

const DrinkCard = (props) => {
    let drinks = props.drinks.map((drink) => {
        return (
            <Drink
                key={ drink._id }
                drink={ drink }
                deleteDrink={ props.deleteDrink }
                updateDrink={ props.updateDrink }
            />
        )
    })

    return (
        <ul>
            { drinks }
        </ul>
    )
}


//     state = {
//         count: 1
//     }

//     increaseLikes = (event) => {
//         let count = this.state.count + 1
//         this.setState({ count })
//     }

//     let DrinksList = this.state.drinks.map((drink, index) => {
//         return (
//             <div className="drink-container">
//                 <div className="drink">
//                     <Card style={{ width: '18rem' }}>
//                         <CardBody>
//                             <CardTitle tag="h6">{ drink.drink }</CardTitle>
//                             <CardText>Likes: { this.state.count }</CardText>
//                             <Button onClick={ this.increaseLikes }>Like</Button>
//                         </CardBody>
//                     </Card>
//                 </div>
//             </div>
//         )
//     })
// }

export default DrinkCard