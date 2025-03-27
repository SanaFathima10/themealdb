import React, { useEffect, useState } from "react";
import './Area.css';

function Area() {
    const [areas, setAreas] = useState([]);
    const [selectedArea, setSelectedArea] = useState("");
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
            .then((response) => response.json())
            .then((data) => setAreas(data.meals || []))
            .catch((error) => console.error("Error fetching areas:", error));
    }, []);

    useEffect(() => {
        if (selectedArea) {
            setLoading(true);
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`)
                .then((response) => response.json())
                .then((data) => {
                    setMeals(data.meals || []);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching meals:", error);
                    setLoading(false);
                });
        }
    }, [selectedArea]);


    const getFlagUrl = (area) => {
        const countryMap = {
            American: "us",
            British: "gb",
            Canadian: "ca",
            Chinese: "cn",
            Croatian: "hr",
            Dutch: "nl",
            Egyptian: "eg",
            French: "fr",
            Greek: "gr",
            Indian: "in",
            Irish: "ie",
            Italian: "it",
            Jamaican: "jm",
            Japanese: "jp",
            Kenyan: "ke",
            Malaysian: "my",
            Mexican: "mx",
            Moroccan: "ma",
            Polish: "pl",
            Portuguese: "pt",
            Russian: "ru",
            Spanish: "es",
            Thai: "th",
            Tunisian: "tn",
            Turkish: "tr",
            Vietnamese: "vn",
        };
        const countryCode = countryMap[area] || "un";
        return `https://flagcdn.com/w320/${countryCode}.png`;
    };

    return (
        <div className="area-app-container">
            <h1 className="area-header">Filter Meals by Area</h1>


            <div className="area-flags-container">
                {areas.map((area) => (
                    <div
                        key={area.strArea}
                        className={`area-flag ${selectedArea === area.strArea ? "selected" : ""}`}
                        onClick={() => setSelectedArea(area.strArea)}
                    >
                        <img
                            src={getFlagUrl(area.strArea)}
                            alt={area.strArea}
                            className="area-flag-img"
                        />
                        <p className="area-name">{area.strArea}</p>
                    </div>
                ))}
            </div>

            {loading && <p className="area-loading">Loading...</p>}


            <div className="meals-container">
                {selectedArea && <h2 className="meals-header">Meals in {selectedArea}</h2>}
                <ul className="meals-list" style={{ listStyle: "none", padding: 0 }}>
                    {meals.map((meal) => (
                        <li
                            className="meal-item"
                            key={meal.idMeal}
                        >
                            <img
                                className="meal-thumbnail"
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                width="100"
                            />
                            <p className="meal-name">{meal.strMeal}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Area;