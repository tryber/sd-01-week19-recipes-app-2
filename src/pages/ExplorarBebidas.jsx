import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function ExplorarBebidas() {
  return (
    <div>
      <div className="content-btn">
        <button className="btn one">
            <Link className="link" to="/bebidas/ingredientes">
              Por Ingrediente
            </Link>
          </button>
          <button className="btn two">
            <Link className="link" to="bebidas/random">
              Me surpreenda!
            </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ExplorarBebidas;
