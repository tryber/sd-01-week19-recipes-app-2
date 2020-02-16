import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function ExplorarComidas() {
  return (
    <div>
      <div className="content-btn">
        <button className="btn one">
          <Link className="link" to="comidas/ingredientes">
            Por Ingrediente
          </Link>
        </button>
        <button className="btn two">
          <Link className="link" to="comidas/local">
            Por local de origem
          </Link>
        </button>
        <button className="btn two">
          <Link className="link" to="comidas/random">
            Me surpreenda!
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ExplorarComidas;
