import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AppContext, AppProvider } from '../context/AppContext';
import '../style/SearchBar.css';

export default function SearchBar(props) {

  return (
    <Router>
      <div className="search-bar">
        <input data-testid="search-input" className="search-input" type="text" />
        <div className="row-radio-buttons">
          <label className="label-ingredient">
            <input data-testid="ingredient-search-radio" className="radio-ingredient" type="radio" />
            Ingrediente
          </label>
          <label className="label-name">
            <input data-testid="name-search-radio" className="radio-name" type="radio" />
            Nome
          </label>
          <label className="label-firstletter">
            <input data-testid="first-letter-search-radio" className="radio-firstletter" type="radio" />
            Primeira letra
          </label>
        </div>
      </div>
    </Router>
  );
}