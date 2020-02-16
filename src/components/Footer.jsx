import React from 'react';
import { Link } from 'react-router-dom';
import explorar from '../img/explorar.svg';
import comidas from '../img/comidas.svg';
import bebidas from '../img/bebidas.svg';
import '../style/Footer.css';

function generateLiFooter(link, img) {
  return (
    <li>
      <Link to={`/${link}`}>
        <span>
          <img className="img-footer" src={img} alt={img} />
        </span>
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <div className="content-footer">
      <ul className="footer">
        {generateLiFooter('receitas/bebidas', food)}
        {generateLiFooter('explorer', explorer)}
        {generateLiFooter('receitas/comidas', drink)}
      </ul>
    </div>
  );
}
