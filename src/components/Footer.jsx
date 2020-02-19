import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import explorar from '../img/explorar.svg';
import comidas from '../img/comidas.svg';
import bebidas from '../img/bebidas.svg';
import { AppContext } from '../context/AppContext';
import '../style/Footer.css';

export function generateLiFooter(link, img, callback) {
  return (
    <li>
      <Link to={`/${link}`}>
        <button type="button" onClick={() => callback(`${link}`)}>
          <img className="img-footer" src={img} alt={img} />
        </button>
      </Link>
    </li>
  );
}

export default function Footer() {
  const { setType } = useContext(AppContext);
  return (
    <div className="content-footer">
      <ul className="footer">
        {generateLiFooter('receitas/bebidas', bebidas, setType)}
        {generateLiFooter('explorar', explorar, setType)}
        {generateLiFooter('receitas/comidas', comidas, setType)}
      </ul>
    </div>
  );
}
