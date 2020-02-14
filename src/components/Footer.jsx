import React from 'react';
import { Link } from 'react-router-dom';
import explorer from '../img/explorer.svg';
import food from '../img/food.svg';
import drink from '../img/drink.svg';
import '../style/Footer.css';

export default function Footer() {
  return (
    <div className="content-footer">
      <ul className="footer">
        <li>
          <Link to="/explorer">
            <span>
              <img className="img-footer" src={explorer} alt="explorer" />
            </span>
          </Link>
        </li>
        <li>
          <Link to="/food">
            <span>
              <img className="img-footer" src={food} alt="food" />
            </span>
          </Link>
        </li>
        <li>
          <Link to="/drink">
            <span>
              <img className="img-footer" src={drink} alt="drink" />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
