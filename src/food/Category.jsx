import React, { useEffect, useState, } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Category.css'

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
    <div className='container1'>

      {/* { <h1>Food</h1> } */}
      {
        data.map((obj, index) => {
          return (
            <div className='card1' key={index}>
              <div className='box1'>

                <Link className='li' to={`/category/${obj.strCategory}`}>

                  <img src={obj.strCategoryThumb} alt="" />
                  <h1>{obj.strCategory}</h1>
                </Link>
              </div>
            </div>


          )
        })
      }

    </div>
  )
}

export default Food