import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Meals.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToList, decrease, increase } from '../redux/redux'

function FoodDetails() {



    let { category } = useParams([])

    let data = useSelector(state => state.meals.value)


    let dispatch = useDispatch()
    useEffect(() => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then((result) => {
                console.log(result.data.meals);
                let newMeals = result.data.meals.map((obj, index) => {

                    return {
                        ...obj,
                        count: 0,
                        cart: false,
                        price: Math.floor(Math.random() * (200 - 50 + 1) + 50)
                    }
                })
                console.log(newMeals);


                dispatch(addToList(newMeals))

            })
            .catch((err) => {
                console.log(err);
            })
    }, [])






    return (

        <div className='container'>

            {
                data?.map((obj, index) => {
                    let totalCartCount = data.reduce((total, meal) => total + meal.count, 0);
                    return (

                        <div className='card' key={index}>
                            <Link className='lii' to={`/meal/${obj?.idMeal}`}>
                                <div className='box'>

                                    <img src={obj?.strMealThumb} alt="" width={190} />
                                    <div className='guu'>
                                        <h4>{obj?.strMeal}</h4>
                                        <p>price {obj.price} rs</p>
                                    </div>

                                </div>
                            </Link>
                            <div className='btns'>
                                {
                                    obj.count === 0 ?
                                        <>
                                            <button onClick={() => { dispatch(increase(index)) }}>ADD TO CART</button>
                                        </>
                                        :
                                        <>
                                            <button onClick={() => { dispatch(decrease(index)) }}>
                                                -
                                            </button>
                                            <h2>{obj.count}</h2>
                                            <button onClick={() => { dispatch(increase(index)) }}>
                                                +
                                            </button>
                                        </>
                                }

                            </div>

                        </div>
                    )
                })
            }


        </div>

    )



}

export default FoodDetails

