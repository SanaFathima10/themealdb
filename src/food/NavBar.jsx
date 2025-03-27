import React, { useState } from 'react';
import './NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import cart from '../assets/cart project.png';
import { useSelector } from 'react-redux';

function NavBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const meals = useSelector(state => state.meals.value);

  let totalCartCount = meals.reduce((accumilator, currentobject) => {
    if (currentobject.cart) {
      return accumilator + 1;
    } else {
      return accumilator;
    }
  }, 0);

  console.log('----->', totalCartCount);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className='navbar'>
      <div className='menus'>
        <h4>HOME</h4>
        <div className='menus'>
          <Link to="/area">
            <h4>Menus</h4>
          </Link>
        </div>      </div>

      <div>
        <input
          type="text"
          placeholder='search for your dish.....'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div>
        <button onClick={handleSearch}>Search</button>
      </div>

      <Link to={'/cart'} className='woo'>
        <img src={cart} alt="" width={40} />
      </Link>
    </div>
  );
}

export default NavBar;
