const Ingredient = ({name, id, color, addIngredient}) => {
    return (
        <div className='container'>
            <div className='inner' key={id}>{name}</div>
            <button className='inner' onClick={addIngredient}>Add to Burger</button>
        </div>
    )
}

export default Ingredient