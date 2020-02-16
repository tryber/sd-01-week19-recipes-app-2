import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/RecipeCard.css';

function mealCard(recipe, index) {
  return (
    <Link to={`/receitas/comida/${recipe.idMeal}`} className="recipe-container">
      <div className="recipe-card">
        <img
          className="recipe-image"
          recipe-testid={`${index}-card-img`}
          src={recipe.strMealThumb}
          alt="food recipe"
        />
        <p recipe-testid={`${index}-card-category`} className="recipe-category">
          {recipe.strCategory}
        </p>
        <p recipe-testid={`${index}-card-name`} className="recipe-name">
          {recipe.strMeal}
        </p>
      </div>
    </Link>
  );
}

function RecipeCard({ recipe, index }) {
  if (recipe.idMeal) {
    return mealCard(recipe, index);
  }
  return (
    <Link to={`/receitas/bebida/${recipe.idDrink}`} className="recipe-container">
      <div className="recipe-card">
        <img
          className="recipe-image"
          recipe-testid={`${index}-card-img`}
          src={recipe.strDrinkThumb}
          alt="drink recipe"
        />
        <p recipe-testid={`${index}-card-category`} className="recipe-category">
          {recipe.strCategory}
        </p>
        <p recipe-testid={`${index}-card-name`} className="recipe-name">
          {recipe.strDrink}
        </p>
      </div>
    </Link>
  );
}

RecipeCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    idMeal: PropTypes.string,
    strCategory: PropTypes.string.isRequired,
    strDrink: PropTypes.string,
  }).isRequired,
};

export default RecipeCard;
