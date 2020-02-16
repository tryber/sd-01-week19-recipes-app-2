import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../style/Explorer.css';

function Explorer() {
  return (
    <div>
      <div className="content-btn">
        <button className="btn one">
          <Link className="link" to="explorar/comidas">
            Explorar Comidas
          </Link>
        </button>
        <button className="btn two">
          <Link className="link" to="explorar/bebidas">
            Explorar Bebidas
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Explorer;
