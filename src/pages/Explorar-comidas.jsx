import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../style/Explorer.css';

function ExplorarComidas() {
  return (
    <div>
      <div className="content-btn">
        <button className="btn one">
          <Link className="link" to="/ingredientes">
            Por Ingrediente
          </Link>
        </button>
        <button className="btn two">
          <Link className="link" to="/local">
            Por local de origem
          </Link>
        </button>
        <button className="btn two">
          <Link className="link" to="/random">
            Me surpreenda!
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ExplorarComidas;
