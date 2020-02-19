import React, { useState, useEffect } from 'react';
import '../style/SearchBar.css';


export function debounce(func, wait) {
  let timer = 600;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  };
}


export default function SearchBar() {
  const [checkedRadio, setCheckedRadio] = useState('');

  useEffect(() => {
    console.log(checkedRadio);
  }, [checkedRadio]);

  return (
    <div className="search-bar">
      <form className="search-bar-form">
        <input data-testid="search-input" className="search-input" type="text" />
        <fieldset id="row-radio-buttons" className="row-radio-buttons">
          <div className="fieldset-flex">
            <label htmlFor="ingredient-search-radio" className="label-ingredient">
              <input
                name="row-radio-buttons"
                onClick={(e) => setCheckedRadio(e.target.className)}
                data-testid="ingredient-search-radio"
                className="radio-ingredient"
                type="radio"
              />
              Ingrediente
            </label>
            <label htmlFor="name-search-radio" className="label-name">
              <input
                name="row-radio-buttons"
                onClick={(e) => setCheckedRadio(e.target.className)}
                data-testid="name-search-radio"
                className="radio-name"
                type="radio"
              />
              Nome
            </label>
            <label htmlFor="first-letter-search-radio" className="label-firstletter">
              <input
                name="row-radio-buttons"
                onClick={(e) => setCheckedRadio(e.target.className)}
                data-testid="first-letter-search-radio"
                className="radio-firstletter"
                type="radio"
              />
              Primeira letra
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
