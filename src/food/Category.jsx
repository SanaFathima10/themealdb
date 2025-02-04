import React, { useEffect, useState, } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Category.css';
import logotwo from '../assets/project logo two.webp'
import logo from '../assets/project logo.png'

function Food() {


  let [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")

      .then((result) => {
        console.log(result);

        setData(result.data.categories)
      })

      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <div className='onetwo' style={{ backgroundImage: `url(${logotwo})` }}>
        <img src={logo} alt="" />
      </div>
      <div className='container1'>
<div>


  
</div>

        {
          data.map((obj, index) => {
            return (
              <div className='card1' key={index}>
                <div className='box1'>

                  <Link className='li' to={`/category/${obj.strCategory}`}>

                    <img src={obj.strCategoryThumb} alt="" />
                    <div className='gaa'>
                      <h1>{obj.strCategory}</h1>
                    </div>
                  </Link>
                </div>
              </div>


            )
          })
        }

      </div>
    </>
  )
}

export default Food