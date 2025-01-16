import React from 'react'
import './NavBar.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';

function NavBar() {
    let [data, setData] = useState([])
    //  let count = useSelector(()=>{state})

  let totalCartCount = data.reduce((total, meal) => total + meal.count, 0);
  return (


    <div className='two'>
      <div className='one'>
        <h1>LoGo
        </h1>
      </div  ><h1>CART:{totalCartCount}</h1>                    

           </div>


  )
}

export default NavBar
