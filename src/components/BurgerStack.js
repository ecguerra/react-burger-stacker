import React from 'react'

const BurgerStack = ({selectedIngredients, clearBurger}) => {
    return(
        <>
        {selectedIngredients.map(ingredient => (
            <h2>{ingredient}</h2>
        ))} 
        <button onClick={clearBurger}>Clear Burger</button>
        </>
    )
}

export default BurgerStack