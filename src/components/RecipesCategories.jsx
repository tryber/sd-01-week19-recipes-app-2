import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../style/RecipesCategories.css';

function setCategory(category) {
  console.log(category)
}

function RecipesCategories() {
  const { recipesCategories } = useContext(AppContext);
  return (
    <div className="recipes-categories">
      <button className="category-button" onClick={() => setCategory('All')}>All</button>
      {recipesCategories.map((category) => (
        <button
          data-testid={`${category}-category-filter`}
          key={category} onClick={() => setCategory(category)}
          className="category-button"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default RecipesCategories;
