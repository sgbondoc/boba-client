import React from 'react';
import Drink from './Drink';

const Drinks = (props) => {
    let drinks = props.drinks.map((drink) => {
        return (
            <Drink
                key={ drink._id }
                drink={ drink }
                deleteDrink={ props.deleteDrink }
                updateDrink={ props.updateDrink }
            />
        );
    });

    return (
        <ul>
            { drinks }
        </ul>
    );
};

export default Drinks