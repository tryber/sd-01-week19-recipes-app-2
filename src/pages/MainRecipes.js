import React, { useEffect, useContext } from 'react';
import { getRandomRecipes } from '../services/APIs';
import { AppContext } from '../context/AppContext';
import RecipeCard from '../components/RecipeCard';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import '../style/MainRecipes.css';

function MainRecipes({ location: { pathname } }) {
  const { recipesResults, setRecipesResults } = useContext(AppContext);

  useEffect(() => {
    if (pathname === '/recipes' || pathname === '/comidas') {
      getRandomRecipes('meal', 12, setRecipesResults);
    } else {
      getRandomRecipes('cocktail', 12, setRecipesResults);
    }
  }, []);

  if (!recipesResults) {
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
      {/* <Footer /> */}
    </div>
  );
}

export default MainRecipes;
