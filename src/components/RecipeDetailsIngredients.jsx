import React from 'react';

function RecipeDetailsIngredients({ recipe }) {
  let count = 1;
  const ingredients = [];
  while (recipe[`strIngredient${count}`]) {
    ingredients.push(`${recipe[`strIngredient${count}`]} - ${recipe[`strMeasure${count}`]}`);
    count += 1;
  };
  return (
    <div>
      <p className="details-subtitle">Ingredients</p>
      <div className="details-box">
        {ingredients.map((ingredient) => <p key={ingredient}>- {ingredient}</p>)}
      </div>
    </div>
  );
}

export default RecipeDetailsIngredients;
