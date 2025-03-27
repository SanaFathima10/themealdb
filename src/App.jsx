import { BrowserRouter, Routes, Route } from "react-router-dom"
import Category from "./food/Category"
import Meals from "./food/Meals"
import MealDetails from "./food/MealDetails"
import NavBar from "./food/NavBar"
import { Provider } from "react-redux"
import { store } from "./redux/redux"
import Cart from "./food/Cart"
import SearchResults from './food/SearchResult'
import Area from "./food/Area";


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
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="/area" element={<Area />} />

          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
