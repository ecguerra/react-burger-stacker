import React from 'react'

const BurgerStack = ({selectedIngredients, clearBurger}) => {
    return(
        <>
        {selectedIngredients.map(ingredient => (
            <h2 key={ingredient.id}>{ingredient.name}</h2>
        ))} 
        <button onClick={clearBurger}>Clear Burger</button>
        </>
    )
}

export default BurgerStack