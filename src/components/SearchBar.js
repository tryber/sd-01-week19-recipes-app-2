import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../style/SearchBar.css';

export default function SearchBar() {
  return (
    <Router>
      <div className="search-bar">
        <input data-testid="search-input" className="search-input" type="text" />
        <div className="row-radio-buttons">
          <label htmlFor="ingredient-search-radio" className="label-ingredient">
            <input
              data-testid="ingredient-search-radio"
              className="radio-ingredient"
              type="radio"
            />
            Ingrediente
          </label>
          <label htmlFor="name-search-radio" className="label-name">
            <input data-testid="name-search-radio" className="radio-name" type="radio" />
            Nome
          </label>
          <label htmlFor="first-letter-search-radio" className="label-firstletter">
            <input
              data-testid="first-letter-search-radio"
              className="radio-firstletter"
              type="radio"
            />
            Primeira letra
          </label>
        </div>
      </div>
    </Router>
  );
}
