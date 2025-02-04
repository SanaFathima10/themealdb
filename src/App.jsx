import { BrowserRouter, Routes, Route } from "react-router-dom"
import Category from "./food/Category"
import Meals from "./food/Meals"
import MealDetails from "./food/MealDetails"
import NavBar from "./food/NavBar"
import { Provider } from "react-redux"
import { store } from "./redux/redux"
import Cart from "./food/Cart"



function App() {
  return (
    <div>
      <Provider store={store}>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/category/:category" element={<Meals />} />
          <Route path="/meal/:mealid" element={<MealDetails />} />
          <Route path="/cart" element={<Cart />} />


        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
