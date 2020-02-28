import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { AppContext } from '../context/AppContext';
import '../style/Explorer.css';

function Explorar() {
  const { setTitle } = useContext(AppContext);
  setTitle('Explorar');

  return (
    <div>
      <div className="content-btn">
        <button type="button" className="btn one">
          <Link className="link" to="/explorar/comidas">
            Explorar Comidas
          </Link>
        </button>
        <button type="button" className="btn two">
          <Link className="link" to="/explorar/bebidas">
            Explorar Bebidas
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Explorar;
