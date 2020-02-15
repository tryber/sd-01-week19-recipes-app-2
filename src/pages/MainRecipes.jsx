import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { getRandomRecipes } from '../services/APIs';
import { AppContext } from '../context/AppContext';
import RecipeCard from '../components/RecipeCard';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/MainRecipes.css';

function MainRecipes({ location: { pathname } }) {
  const [recipesResults, setRecipesResults] = useState(undefined);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (pathname === '/recipes' || pathname === '/comidas') {
      getRandomRecipes('meal', 12, setRecipesResults);
    } else {
      getRandomRecipes('cocktail', 12, setRecipesResults);
    }
  }, [pathname]);

  useEffect(() => {
    setLoading(false);
  }, [recipesResults]);

  if (!recipesResults || isLoading) {
    return (
      <div className="main-recipes">
        <h1>Main Recipes</h1>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="main-recipes">
      {/* <Header /> */}
      <div className="recipes-list">
        {recipesResults.map((recipe, index) => (
          <RecipeCard key={`${recipe.strSource}${index * 2}`} recipe={recipe} index={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

MainRecipes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainRecipes;
