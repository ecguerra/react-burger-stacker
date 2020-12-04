import React from 'react'

const BurgerStack = ({selectedIngredients, clearBurger}) => {
    return(
        <div className="side">
        {selectedIngredients.map(ingredient => (
            <div style={{color: ingredient.color}} key={ingredient.id}>{ingredient.name}</div>
        ))} 
        <button onClick={clearBurger}>Clear Burger</button>
        </div>
    )
}

export default BurgerStack