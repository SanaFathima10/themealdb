
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from '../redux/redux';
import './Cart.css'

function Cart() {
    let cartItems = useSelector(state => state.meals.value)
    let dispatch = useDispatch()
    return (
        <div className='all'>
            <h2>Cart Items :</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (

                <div>

                    {cartItems.map((item) => {

                        if (item.cart) {

                            return <div className='cartzro' key={item.idMeal} >

                                <div className='cart' >

                                    <img className='cartone' src={item?.strMealThumb} alt="" width={50} />
                                    <div className='cartu'>
                                        <h3>{item.strMeal}</h3>
                                        <h3>{item.count * item.price}</h3>
                                        <button className='btn'>buy</button>
                                        <div className='spa'>

                                            <button onClick={() => { dispatch(decrease(item.idMeal)) }}>
                                                -
                                            </button>
                                            <h2>{item.count}</h2>
                                            <button onClick={() => { dispatch(increase(item.idMeal)) }}>
                                                +
                                            </button>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        }
                    })}


                </div>
            )}
            <div className="total">
                <h1>Total Price: </h1>
            </div>
        </div>

    );

}

export default Cart;










