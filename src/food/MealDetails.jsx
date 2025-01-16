import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './MealDetails.css'

function MealDetails() {
    let [data, setData] = useState(null);
    let { mealid } = useParams();

    console.log(mealid);

    useEffect(() => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
            .then((result) => {
                console.log(result);
                setData(result.data.meals[0])
            })
            .catch((err) => {
                console.log(err);

            })
    }, [mealid])

    return (
        <div className='container'>

            <div className='template' style={{ backgroundImage: `url(${data?.strMealThumb})`, width: '400px' }}>
                <div className='content'>

                    <h4>{data?.strMeal}</h4>
                    <img src={data?.strMealThumb} alt="" width={150} />
                    <h4>{data?.strInstructions}</h4>
                </div>
            </div>


        </div>
    )
}

export default MealDetails