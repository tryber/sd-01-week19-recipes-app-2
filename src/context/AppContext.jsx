import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  // recipes State
  const [recipesResults, setRecipesResults] = useState();
  const [recipesCategories, setRecipesCategories] = useState();
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [filteredRecipes, setFilteredRecipes] = useState();

  // header States
  const [displayUserIcon, setDisplayUserIcon] = useState(true);
  const [displaySearchIcon, setDisplaySearchIcon] = useState(true);
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [title, setTitle] = useState('Header');
  const displaySearchBarToggle = () => setDisplaySearchBar(!displaySearchBar);

  const context = {
    recipesResults,
    recipesCategories,
    categoryFilter,
    filteredRecipes,
    displayUserIcon,
    displaySearchIcon,
    displaySearchBar,
    title,
    displaySearchBarToggle,
    setRecipesResults,
    setRecipesCategories,
    setCategoryFilter,
    setFilteredRecipes,
    setDisplayUserIcon,
    setDisplaySearchIcon,
    setTitle,
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
