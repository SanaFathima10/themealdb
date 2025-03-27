import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './SearchResult.css';


function SearchResults() {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php`, {
        params: {
          s: query,  
        },
      })
      .then((response) => {
        setResults(response.data.meals || []); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, [query]);

  return (
    <div className='searchsection'>
      <h1>Search Results for: {query}</h1>
      <div>
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.idMeal} className='meal-card'>
              <img
                src={result.strMealThumb}
                alt={result.strMeal}
                className="meal-image"
              />
              <h3>{result.strMeal}</h3>
            </div>
          ))
        ) : (
          <p>No results found for "{query}"</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
