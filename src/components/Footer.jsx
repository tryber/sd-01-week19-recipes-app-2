import React from 'react'
import { Link } from 'react-router-dom';
import explorer from '../img/explorer.svg'
import food from '../img/food.svg'
import drink from '../img/drink.svg'


export default function Footer() {
  return (
    <ul>
      <Link to="/explorer"><li><button><img src={explorer} alt="explorer"/></button></li></Link>
      <Link to="/food"><li><button><img src={food} alt="food"/></button></li></Link>
      <Link to="/drink"><li><button><img src={drink} alt="drink"/></button></li></Link>
    </ul>
  );
}

  