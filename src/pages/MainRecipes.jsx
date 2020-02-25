import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { getRandomRecipes } from '../services/APIs';
import { AppContext } from '../context/AppContext';
import RecipesCategories from '../components/RecipesCategories';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';
import '../style/MainRecipes.css';

function MainRecipes({ location: { pathname } }) {
  const {
    recipesResults,
    setRecipesResults,
    recipesCategories,
    setRecipesCategories,
    categoryFilter,
    filteredRecipes,
    setFilteredRecipes,
    type,
    setType,
    checkedRadio,
  } = useContext(AppContext);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (pathname === '/receitas/bebidas/') {
      setType('cocktail');
    } else {
      setType('meal');
    }
  }, [pathname, setType]);

  useEffect(() => {
    if (checkedRadio === '') {
      setLoading(true);
      getRandomRecipes(type, setRecipesResults, setRecipesCategories);
    }
  },
  [checkedRadio, setLoading, setRecipesResults, setRecipesCategories, type]);

  useEffect(() => {
    if (categoryFilter === 'All') setFilteredRecipes(recipesResults);
    else {
      const filtered = recipesResults.filter((recipe) => recipe.strCategory === categoryFilter);
      setFilteredRecipes(filtered);
    }
    setLoading(false);
  }, [recipesResults, categoryFilter, setFilteredRecipes]);

  if (!filteredRecipes || !recipesResults || !recipesCategories || isLoading) {
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
      <RecipesCategories />
      <div className="recipes-list">
        {filteredRecipes && filteredRecipes.map((recipe, index) => (
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
