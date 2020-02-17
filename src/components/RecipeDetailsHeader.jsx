import React from 'react';
import PropTypes from 'prop-types';
import share from '../img/share.svg';
import heart from '../img/heart.svg';

function RecipeDetailsHeader({ recipe }) {
  return (
    <div className="details-header">
      <div className="details-title">
        <h3 className="details-name">{recipe.strMeal || recipe.strDrink}</h3>
        <p className="details-category">{recipe.strCategory}</p>
      </div>
      <div className="details-icons">
        <img className="details-icons" src={share} alt="share" />
        <img className="details-icons" src={heart} alt="heart" />
      </div>
    </div>
  );
}

RecipeDetailsHeader.propTypes = {
  recipe: PropTypes.shape({
    strMeal: PropTypes.string,
    strDrink: PropTypes.string,
    strCategory: PropTypes.string,
  }).isRequired,
};

export default RecipeDetailsHeader;
