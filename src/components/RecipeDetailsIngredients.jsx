import React from 'react';
import PropTypes from 'prop-types';

function RecipeDetailsIngredients({ recipe }) {
  let count = 1;
  const ingredients = [];
  while (recipe[`strIngredient${count}`]) {
    ingredients.push(`${recipe[`strIngredient${count}`]} - ${recipe[`strMeasure${count}`]}`);
    count += 1;
  }
  return (
    <div>
      <p className="details-subtitle">Ingredients</p>
      <div className="details-box">
        {ingredients.map((ingredient) => <p key={ingredient}>- {ingredient}</p>)}
      </div>
    </div>
  );
}

RecipeDetailsIngredients.propTypes = {
  recipe: PropTypes.shape({
    strIngredient1: PropTypes.string.isRequired,
    strMeasure1: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeDetailsIngredients;
