import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  // recipes States
  const [recipesResults, setRecipesResults] = useState();
  const [recipesCategories, setRecipesCategories] = useState();
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [filteredRecipes, setFilteredRecipes] = useState();
  const [type, setType] = useState('meal');
  const [updateFlag, setUpdateFlag] = useState(true);


  // recipe details States
  const [recipeDetails, setRecipeDetails] = useState({});
  const [recipeRecommendation, setRecipeRecommendation] = useState();

  // header States
  const [displaySearchIcon, setDisplaySearchIcon] = useState(true);
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [title, setTitle] = useState('Header');
  const [displayHeader, setDisplayHeader] = useState(true);
  const displaySearchBarToggle = () => setDisplaySearchBar(!displaySearchBar);

  // searchbar States

  const [checkedRadio, setCheckedRadio] = useState('');
  const [searchFlag, setSearchFlag] = useState(false);

  const context = {
    checkedRadio,
    setCheckedRadio,
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
    searchFlag,
    setSearchFlag,
    updateFlag,
    setUpdateFlag,
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
