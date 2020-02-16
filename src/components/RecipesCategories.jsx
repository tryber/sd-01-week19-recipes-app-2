import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../style/RecipesCategories.css';

function setCategory(elem, categoryFilter, setCategoryFilter) {
  const category = elem.innerHTML;
  const buttonAllStyle = document.querySelector('.selected').style;
  if (categoryFilter === category) {
    elem.blur();
    buttonAllStyle.border = '3px solid gray';
    setCategoryFilter('All');
  } else {
    if (category === 'All') buttonAllStyle.border = '3px solid gray';
    else buttonAllStyle.border = '1px solid darkgray';
    setCategoryFilter(category);
  }
}

function RecipesCategories() {
  const { recipesCategories, categoryFilter, setCategoryFilter } = useContext(AppContext);
  return (
    <div className="recipes-categories">
      <button
        data-testid="All-category-filter"
        className="category-button selected"
        onClick={(e) => setCategory(e.target, categoryFilter, setCategoryFilter)}
      >
        All
      </button>

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
