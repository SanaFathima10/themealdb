import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import cart from '../assets/cart project.png'
import { useSelector } from 'react-redux';



function NavBar() {
  let meals = useSelector(state => state.meals.value)
  let totalCartCount = meals.reduce((accumilator, currentobject) => {

    console.log(currentobject.cart);

    if (currentobject.cart) {

      return accumilator + 1;
    } else {
      return accumilator
    }


  }, 0)

  console.log('----->', totalCartCount);


  return (



    <div className='navbar'>

      <div className='menus'>
        <h4>fds</h4>
        <h4>fds</h4>
        <h4>fds</h4>
        <h4>fds</h4>
      </div>

      <Link to={'/cart'} className='woo'>
        <img src={cart} alt="" width={50} />
      </Link>


    </div>



  )
}

export default NavBar
