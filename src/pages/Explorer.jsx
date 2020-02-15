import React from 'react';
import Footer from '../components/Footer';
import '../style/Footer.css';


function Explorer () {
  return (
    <div>
      <div>
          <button>Explorar Comidas</button>
          <button>Explorar Bebidas</button>
      </div>
      <Footer />
    </div>
  );
}

export default Explorer;