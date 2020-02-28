import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { searchById } from '../services/APIs';
import { AppContext } from '../context/AppContext';
import RecipeDetailsHeader from '../components/RecipeDetailsHeader';
import RecipeDetailsIngredients from '../components/RecipeDetailsIngredients';
import RecipeDetailsInstructions from '../components/RecipeDetailsInstructions';
import RecipeDetailsVideo from '../components/RecipeDetailsVideo';
import RecipeDetailsRecommendation from '../components/RecipeDetailsRecommendation';
import '../style/RecipeDetails.css';

function RecipeDetails({ location: { pathname }, match: { params: { bebidacomida, id } } }) {
  const {
    recipeDetails,
    setRecipeDetails,
    setRecipeRecommendation,
  } = useContext(AppContext);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (bebidacomida === 'comida') searchById('meal', id, setRecipeDetails, setRecipeRecommendation);
    else searchById('cocktail', id, setRecipeDetails, setRecipeRecommendation);
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
        alt="recipe preview"
      />
      <RecipeDetailsHeader recipe={recipeDetails} />
      <RecipeDetailsIngredients recipe={recipeDetails} />
      <RecipeDetailsInstructions recipe={recipeDetails} />
      <RecipeDetailsVideo recipe={recipeDetails} />
      <RecipeDetailsRecommendation />
    </div>
  );
}

RecipeDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeDetails;
