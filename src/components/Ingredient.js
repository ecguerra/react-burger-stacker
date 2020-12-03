const Ingredient = ({name, id, addIngredient}) => {
    return (
        <>
            <div key={id}>{name}</div>
            <button onClick={addIngredient}>Add to Burger</button>
        </>
    )
}

export default Ingredient