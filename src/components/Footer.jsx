import React from 'react'
import { Link } from 'react-router-dom';
import explorer from '../img/explorer.svg'
import food from '../img/food.svg'
import drink from '../img/drink.svg'
import '../style/Footer.css';


export default function Footer() {
  return (
    <div className="content-footer">
      <ul className="footer" >
        <Link to="/explorer"><li><span><img className="img-footer" src={explorer} alt="explorer"/></span></li></Link>
        <Link to="/food"><li><span><img className="img-footer" src={food} alt="food"/></span></li></Link>
        <Link to="/drink"><li><span><img className="img-footer" src={drink} alt="drink"/></span></li></Link>
      </ul>
    </div>
  );
}

  