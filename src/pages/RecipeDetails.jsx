import React, { useState, useContext, useEffect } from 'react';
import { searchById } from '../services/APIs';
import { AppContext } from '../context/AppContext';
import RecipeIngredients from '../components/RecipeIngredients';
import share from '../img/share.svg';
import heart from '../img/heart.svg';
import '../style/RecipeDetails.css';

function RecipeDetails({ location: { pathname } }) {
  const { recipeDetails, setRecipeDetails } = useContext(AppContext);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const parameter = pathname.split('/');
    if(parameter[2] === 'comida') searchById('meal', parameter[3], setRecipeDetails);
    else searchById('cocktail', parameter[3], setRecipeDetails);
  }, [pathname]);

  useEffect(() => {
    setLoading(false);
  }, [recipeDetails]);

  if (!recipeDetails || isLoading) {
    return (
      <div className="main-recipes">
        <h1>Recipe Details</h1>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="recipe-details">
      <img
        className="details-image"
        src={recipeDetails.strDrinkThumb || recipeDetails.strMealThumb}
        alt="recipe"
      />
      <div className="details-header">
        <div className="details-title">
          <h3 className="details-name">{recipeDetails.strMeal || recipeDetails.strDrink}</h3>
          <p className="details-category">{recipeDetails.strCategory}</p>
        </div>
        <div className="details-icons">
          <img className="details-icons" src={share} alt="share"/>
          <img className="details-icons" src={heart} alt="heart"/>
        </div>
      </div>
      <div>
        <p className="details-subtitle">Ingredients</p>
        <RecipeIngredients recipe={recipeDetails} />
      </div>
      <div>
        <p className="details-subtitle">Instructions</p>
        <p className="details-box">{recipeDetails.strInstructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetails;
