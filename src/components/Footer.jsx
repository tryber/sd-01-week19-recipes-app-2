import React from 'react';
import { Link } from 'react-router-dom';
import explorar from '../img/explorar.svg';
import comidas from '../img/comidas.svg';
import bebidas from '../img/bebidas.svg';
import '../style/Footer.css';

export function generateLiFooter(link, img) {
  return (
    <li>
      <Link to={`/${link}`}>
        <button type="button">
          <img className="img-footer" src={img} alt={img} />
        </button>
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <div className="content-footer">
      <ul className="footer">
        {generateLiFooter('receitas/bebidas', bebidas)}
        {generateLiFooter('explorar', explorar)}
        {generateLiFooter('receitas/comidas', comidas)}
      </ul>
    </div>
  );
}
