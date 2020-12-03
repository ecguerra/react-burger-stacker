import React from 'react'

const BurgerStack = ({selectedIngredients}) => {
    return(
        <>
        {selectedIngredients.map(ingredient => (
            <h2>{ingredient}</h2>
        ))} 
        <button>Clear Burger</button>
        </>
    )
}

export default BurgerStack