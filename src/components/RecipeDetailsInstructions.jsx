import React from 'react';
import PropTypes from 'prop-types';

function RecipeDetailsInstructions({ recipe }) {
  return (
    <div>
      <p className="details-subtitle">Instructions</p>
      <p className="details-box padding">{recipe.strInstructions}</p>
    </div>
  );
}

RecipeDetailsInstructions.propTypes = {
  recipe: PropTypes.shape({
    strInstructions: PropTypes.string,
  }).isRequired,
};

export default RecipeDetailsInstructions;
