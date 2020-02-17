import React from 'react';

function RecipeDetailsInstructions({ recipe }) {
  return (
    <div>
      <p className="details-subtitle">Instructions</p>
      <p className="details-box padding">{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeDetailsInstructions;
