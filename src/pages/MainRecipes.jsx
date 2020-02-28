import React, {
  useEffect, useState, useContext,
} from 'react';
import PropTypes from 'prop-types';
import { getRandomRecipes, getRecipeCategories } from '../services/APIs';
import { AppContext } from '../context/AppContext';
import RecipesCategories from '../components/RecipesCategories';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';
import '../style/MainRecipes.css';

function Loading() {
  return (
    <div className="main-recipes">
      <h1>Main Recipes</h1>
      <p>Loading...</p>
    </div>
  );
}

function MainRecipes({ location: { pathname } }) {
  const [updateRecipesFlag, setUpdateRecipesFlag] = useState(false);
  const [updateFiltersFlag, setUpdateFiltersFlag] = useState(false);
  const [isLoading, setLoading] = useState(true);

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
    setTitle,
    setDisplayHeader,
  } = useContext(AppContext);

  setDisplayHeader(true);

  useEffect(() => {
    setRecipesResults([]);
    setLoading(true);
    if (pathname === '/receitas') {
      setTitle('Receitas');
      setType('meal');
    } else if (pathname === '/receitas/bebidas') {
      setTitle('Bebidas');
      setType('cocktail');
    } else if (pathname === '/receitas/comidas') {
      setTitle('Comidas');
      setType('meal');
    }
    setUpdateRecipesFlag(true);
  }, [pathname, setType, setTitle, setRecipesResults]);


  useEffect(() => {
    async function fetchData() {
      const recipes = await getRandomRecipes(type);
      setRecipesResults(recipes);

      const recipeCategory = await getRecipeCategories(type);
      setRecipesCategories(recipeCategory);
    }

    if (updateRecipesFlag === true) {
      fetchData();
      setUpdateRecipesFlag(false);
      setUpdateFiltersFlag(true);
    }
  },
  [
    updateRecipesFlag,
    type,
    setRecipesCategories,
    setRecipesResults,
  ]);

  useEffect(() => {
    if (categoryFilter === 'All') {
      setFilteredRecipes(recipesResults);
    } else {
      const filtered = recipesResults
        .filter((recipe) => recipe.strCategory === categoryFilter);
      setFilteredRecipes(filtered);
    }
    setLoading(false);
    setUpdateFiltersFlag(false);
  }, [recipesResults, updateFiltersFlag, categoryFilter, setFilteredRecipes]);

  if (!recipesCategories || (!recipesResults && isLoading) || isLoading) {
    return <Loading />;
  }

  if (recipesCategories || !isLoading) {
    return (
      <div className="main-recipes">
        <RecipesCategories />
        <div className="recipes-list">
          {filteredRecipes.length ? filteredRecipes.map((recipe, index) => (
            <RecipeCard key={`${recipe.strSource}${index * 2}`} recipe={recipe} index={index} />
          )) : 'Sua busca não retornou resultado'}
        </div>
        <Footer />
      </div>
    );
  }
}

MainRecipes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainRecipes;
