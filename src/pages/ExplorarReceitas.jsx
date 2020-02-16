import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// function explorarBebidas
function ExplorarReceitas({ location: { pathname } }) {
  if (pathname === '/recipes' || pathname === '/comidas') {
    getRandomRecipes('meal', 12, setRecipesResults);
  } else {
    getRandomRecipes('cocktail', 12, setRecipesResults);
  }
  return (
    <div>
      <div className="content-btn">
        <button className="btn one">
            <Link className="link" to="/bebidas/ingredientes">
              Por Ingrediente
            </Link>
          </button>
          <button className="btn two">
          <Link className="link" to="/comidas/local">
            Por local de origem
          </Link>
        </button>
          <button className="btn two">
            <Link className="link" to="/bebidas/random">
              Me surpreenda!
            </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ExplorarReceitas;
