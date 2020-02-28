import React, {
  useState, useContext, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { getRandomRecipes } from '../services/APIs';
import { AppContext } from '../context/AppContext';
import RecipeDetailsHeader from '../components/RecipeDetailsHeader';
import RecipeDetailsIngredients from '../components/RecipeDetailsIngredients';
import RecipeDetailsInstructions from '../components/RecipeDetailsInstructions';
import RecipeDetailsVideo from '../components/RecipeDetailsVideo';
import RecipeDetailsRecommendation from '../components/RecipeDetailsRecommendation';
import '../style/RecipeDetails.css';

function RecipeDetails({ location: { pathname } }) {
  const {
    recipeDetails,
    setRecipeDetails,
    setRecipeRecommendation,
    type,
    setDisplayHeader,
  } = useContext(AppContext);
  const [isLoading, setLoading] = useState(true);

  setDisplayHeader(false);

  const searchById = useCallback(async (id) => {
    let details = await fetch(`https://www.the${type}db.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((data) => data.json());
    let getRecommendations;
    if (type === 'meal') {
      details = details.meals;
      getRecommendations = await getRandomRecipes('cocktail');
    } else {
      details = details.drinks;
      getRecommendations = await getRandomRecipes('meal');
    }
    setRecipeRecommendation(getRecommendations);

    return details[0];
  }, [setRecipeRecommendation, type]);

  const getDetails = useCallback(async () => {
    setLoading(true);
    const parameter = pathname.split('/');
    const id = parameter[3];
    const details = await searchById(id);
    setRecipeDetails(details);
  }, [pathname, searchById, setRecipeDetails]);

  useEffect(() => {
    getDetails();
    setLoading(false);
  }, [getDetails]);

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
