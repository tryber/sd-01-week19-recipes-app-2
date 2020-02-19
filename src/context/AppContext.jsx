import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  // recipes States
  const [recipesResults, setRecipesResults] = useState();
  const [recipesCategories, setRecipesCategories] = useState();
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [filteredRecipes, setFilteredRecipes] = useState();
  const [type, setType] = useState('explorar');

  // recipe details States
  const [recipeDetails, setRecipeDetails] = useState({});
  const [recipeRecommendation, setRecipeRecommendation] = useState();

  // header States
  const [displaySearchIcon, setDisplaySearchIcon] = useState(true);
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [title, setTitle] = useState('Header');
  const [displayHeader, setDisplayHeader] = useState(true);
  const displaySearchBarToggle = () => setDisplaySearchBar(!displaySearchBar);

  const context = {
    recipesResults,
    recipesCategories,
    categoryFilter,
    filteredRecipes,
    recipeDetails,
    recipeRecommendation,
    displaySearchIcon,
    displaySearchBar,
    title,
    displaySearchBarToggle,
    setRecipesResults,
    setRecipesCategories,
    setCategoryFilter,
    setFilteredRecipes,
    setRecipeDetails,
    setRecipeRecommendation,
    setDisplaySearchIcon,
    setTitle,
    displayHeader,
    setDisplayHeader,
    type,
    setType,
  };

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
