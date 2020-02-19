import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';
import '../style/SearchBar.css';

export function debounce(func, wait) {
  let timer = 600;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  };
}

export function RenderRadioButtons(props) {
  const { setCheckedRadio } = props;
  return (
    <div>
      <RadioButton
        onClick={setCheckedRadio}
        data-testid="ingredient-search-radio"
        styleClass="radio-ingredient"
        labelClass="label-ingredient"
      >
        Ingrediente
      </RadioButton>
      <RadioButton
        onClick={setCheckedRadio}
        data-testid="name-search-radio"
        styleClass="radio-name"
        labelClass="label-name"
      >
        Name
      </RadioButton>
      <RadioButton
        onClick={setCheckedRadio}
        data-testid="first-letter-search-radio"
        styleClass="radio-firstletter"
        labelClass="label-firstletter"
      >
        Primeira Letra
      </RadioButton>
    </div>
  );
}

export default function SearchBar() {
  const [checkedRadio, setCheckedRadio] = useState('');
  console.log(checkedRadio);
  return (
    <div className="search-bar">
      <form className="search-bar-form">
        <input data-testid="search-input" className="search-input" type="text" />
        <fieldset id="row-radio-buttons" className="row-radio-buttons">
          <div className="fieldset-flex">
            <RenderRadioButtons setCheckedRadio={(e) => setCheckedRadio(e.target.className)} />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

RenderRadioButtons.propTypes = {
  setCheckedRadio: PropTypes.func.isRequired,
};
