import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../style/ExplorarReceitas.css';

function generateButton(number, pathname, type, title) {
  return (
    <button className={`btnreceitas ${number}`}>
      <Link className="link" to={`/${pathname}/${type}`}>
        {title}
      </Link>
    </button>
  );
}

function isComidasOrBebidas(pathname) {
  const title = {
    title1: 'Por ingredientes',
    title3: 'Por local de origem',
    title2: 'Me surpreenda',
  };
  if (pathname === '/explorar/comidas') {
    return (
      <div className="content-btn-receitas">
        {generateButton('one', pathname, 'ingredientes', title.title1)}
        {generateButton('two', pathname, 'local', title.title2)}
        {generateButton('three', pathname, 'random', title.title3)}
      </div>
    );
  } return (
    <div className="content-btn-receitas">
      {generateButton('one', pathname, 'ingredientes', title.title1)}
      {generateButton('two', pathname, 'local', title.title2)}
    </div>
  );
}

function ExplorarReceitas({ location: { pathname } }) {
  return (
    <div>
      {isComidasOrBebidas(pathname)}
      <Footer />
    </div>
  );
}

ExplorarReceitas.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExplorarReceitas;
