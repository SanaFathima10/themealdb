import { BrowserRouter, Routes, Route } from "react-router-dom"
import Category from "./food/Category"
import Meals from "./food/Meals"
import MealDetails from "./food/MealDetails"
import NavBar from "./food/NavBar"



function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/category/:category" element={<Meals />} />
          <Route path="/meal/:mealid" element={<MealDetails />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
