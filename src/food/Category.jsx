import React, { useEffect, useState, } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Category.css'
import logotwo from '../assets/project logo two.webp'
import logo from '../assets/project logo.png'
import beef from '../assets/beef.jpg'
import star from '../assets/star.png'

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
      <div className='sect'>
        <div className='boxs'>
          <div className='cheruth'>
            <h1 style={{ fontFamily: "arial" }}>CONCEPT & VISION</h1>
          </div>
        </div>

        <div className='boxtu'>
          <h2>
            <span>Welcome to Keithston!</span>
            <br />
            At Keithston, we offer a one-of-a-kind dining experience that blends exceptional flavors with a cozy, inviting atmosphere. Whether you're enjoying a casual meal with friends, celebrating a special occasion, or simply treating yourself to something delicious, our menu features carefully crafted dishes made from the freshest ingredients. Our dedicated team is here to ensure your experience is unforgettable, with top-notch service every time. Come join us and discover a culinary journey that will leave your taste buds delighted!
          </h2>
        </div>

      </div>
      <div className='mealss'>
        <h1><span>LIST ALL MEAL CATEGORIES</span></h1>
      </div>
      <div className='container1'>




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
      <div className='section-40'>

        <h1 className='best'>BEST SELLER IN THIS WEEK</h1>
      </div>
      <div className='section-4'>
        <div className='section-41'>
          <div className='sec-2'>
            <div className='sec-20'>
              <img src={beef} alt="" width={350} />
            </div>
          </div>
          <div className='sec-1'>
            <div className='sec-10'>


              <h2 className='grill'> GRILLED BEEF TENDERLOIN TRUFFLE MASH</h2>
              <p className='indulge'>"Indulge in the rich,authentic flavors of our handcrafted grilled beef tenderlion truffle mash,made with love and care"</p>
              <img src={star} alt="" width={80} />
            </div>
          </div>
        </div>

      </div>

      <div className='section-5'>
        <button>Meet Our Team



        
        </button>
      </div>

    </>
  )
}

export default Food