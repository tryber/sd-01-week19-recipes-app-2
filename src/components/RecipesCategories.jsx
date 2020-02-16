import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../style/RecipesCategories.css';

function setCategory(elem, categoryFilter, setCategoryFilter) {
  const category = elem.innerHTML;
  if (categoryFilter === category) {
    elem.blur();
    setCategoryFilter('');
  } else {
    setCategoryFilter(category);
  }
  console.log(categoryFilter)
}

function RecipesCategories() {
  const { recipesCategories, categoryFilter, setCategoryFilter } = useContext(AppContext);
  return (
    <div className="recipes-categories">
      <button className="category-button" onClick={(e) => setCategory(e.target, categoryFilter, setCategoryFilter)}>All</button>
      {recipesCategories.map((category) => (
        <button
          data-testid={`${category}-category-filter`}
          key={category}
          onClick={(e) => setCategory(e.target, categoryFilter, setCategoryFilter)}
          className="category-button"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default RecipesCategories;
