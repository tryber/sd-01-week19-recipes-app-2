import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import RecipeCard from './RecipeCard';

function renderRecommendations(recipeRecommendation) {
  if (!recipeRecommendation) return <p className="details-box">Loading...</p>;
  return (
    <div className="details-recommendation">
      {recipeRecommendation.map((recipe, index) => (
        <RecipeCard key={`${recipe.strSource}${index * 2}`} recipe={recipe} index={index} />
      ))}
    </div>
  );
}

function RecipeDetailsRecommendation() {
  const { recipeRecommendation } = useContext(AppContext);

  return (
    <div>
      <p className="details-subtitle">Recommendations</p>
      {renderRecommendations(recipeRecommendation)}
    </div>
  );
}

export default RecipeDetailsRecommendation;
