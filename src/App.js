import React, {useState} from "react";
// Components imports
import Ingredient from "./components/Ingredient";
import BurgerStack from './components/BurgerStack'
// CSS imports
import "./css/App.css";

const App = () => {
  const [ingredients, setIngredients] = useState(
    [
      { name: "Kaiser Bun", color: "saddlebrown", id: 1 },
      { name: "Sesame Bun", color: "sandybrown", id: 2 },
      { name: "Gluten Free Bun", color: "peru", id: 3 },
      { name: "Lettuce Wrap", color: "olivedrab", id: 4 },
      { name: "Beef Patty", color: "#3F250B", id: 5 },
      { name: "Soy Patty", color: "#3F250B", id: 6 },
      { name: "Black Bean Patty", color: "#3F250B", id: 7 },
      { name: "Chicken Patty", color: "burlywood", id: 8 },
      { name: "Lettuce", color: "lawngreen", id: 9 },
      { name: "Tomato", color: "tomato", id: 10 },
      { name: "Bacon", color: "maroon", id: 11 },
      { name: "Onion", color: "lightyellow", id: 12 }
])

const [selectedIngredients, setSelectedIngredients] = useState([])

const addIngredient = name => {
  setSelectedIngredients([...selectedIngredients,name])
}

  return (

    <div className="App">
          <h2>Ingredients</h2>
          {ingredients.map(ingredient => (
          <Ingredient 
            key={ingredient.id}
            name={ingredient.name}
            addIngredient={() => addIngredient(ingredient.name)}
          />
          ))}
          <BurgerStack 
            selectedIngredients = {selectedIngredients}
          />
    </div>
  );
};

export default App;
