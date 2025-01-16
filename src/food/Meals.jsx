import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Meals.css'

function FoodDetails() {

    let [data, setData] = useState([])

    let { category } = useParams([])

    useEffect(() => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then((result) => {
                console.log(result.data.meals);
                let newMeals = result.data.meals.map((obj, index) => {

                    return {
                        ...obj,
                        count: 0
                    }
                })
                console.log(newMeals);

                setData(newMeals)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])



    function increase(i) {
        data[i].count++
        setData([...data])
    }
    function decrease(i) {
        data[i].count--
        setData([...data])
    }



    return (
        <div className='container'>

            {
                data?.map((obj, index) => {
                   let totalCartCount = data.reduce((total, meal) => total + meal.count,0);
                    return (
                        <div className='card' key={index}>
                            <div className="cart-summary">
      </div>
                            <Link className='lii' to={`/meal/${obj?.idMeal}`}>
                                <div className='box'>

                                    <img src={obj?.strMealThumb} alt="" width={150} />
                                    <h4>{obj?.strMeal}</h4>

                                </div>
                            </Link>
                            <div className='cart'>
                                {
                                    obj.count === 0 ?
                                    <>
                                            <button onClick={() => { increase(index) }}>ADD TO CART</button>
                                        </>
                                        :
                                        <>
                                            <button onClick={() => { decrease(index) }}>
                                                -
                                            </button>
                                            <h2>{obj.count}</h2>
                                            <button onClick={() => { increase(index) }}>
                                                +
                                            </button>
                                        </>
                                }

                            </div>
                                cart:{totalCartCount}
                        </div>
                    )
                })
            }


        </div>
    )



}

export default FoodDetails

