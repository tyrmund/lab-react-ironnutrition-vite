import { useState } from "react";
import "./App.css";
import foodsJson from './foods.json'
import FoodList from "./components/FoodList/FoodList";
import AddFoodForm from "./components/AddFoodForm/AddFoodForm";

function App() {

  const [foods, setFoods] = useState(foodsJson)

  const handleDelete = (foodId) => {
    const updatedFoodList = foods.filter(food => food.id !== foodId)
    setFoods(updatedFoodList)
  }

  const addNewFood = (newFood) => {
    const updatedFoodList = [newFood, ...foods]
    setFoods(updatedFoodList)
  }

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />
      <FoodList foods={foods} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
