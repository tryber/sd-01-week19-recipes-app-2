import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/RecipeCard.css';

function RecipeCard({ recipe, index }) {
  let type = 'bebida';
  if (recipe.idMeal) type = 'comida';
  return (
    <Link to={`/receitas/${type}/${recipe.idDrink || recipe.idMeal}`} className="recipe-container">
      <div className="recipe-card">
        <img
          className="recipe-image"
          recipe-testid={`${index}-card-img`}
          src={recipe.strDrinkThumb || recipe.strMealThumb}
          alt="recipe card"
        />
        <p recipe-testid={`${index}-card-category`} className="recipe-category">
          {recipe.strCategory}
        </p>
        <p recipe-testid={`${index}-card-name`} className="recipe-name">
          {recipe.strDrink || recipe.strMeal}
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
