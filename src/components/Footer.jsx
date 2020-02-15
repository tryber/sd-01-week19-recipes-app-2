import React from 'react';
import { Link } from 'react-router-dom';
import explorer from '../img/explorer.svg';
import food from '../img/food.svg';
import drink from '../img/drink.svg';
import '../style/Footer.css';

const generateLiFooter = (link, img) => {
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
        {generateLiFooter("explorer", explorer)}
        {generateLiFooter("food", food)}
        {generateLiFooter("drink", drink)}
      </ul>
    </div>
  );
}
