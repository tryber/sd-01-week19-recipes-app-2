import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';
import '../style/SearchBar.css';
import { AppContext } from '../context/AppContext';
import { searchByEndpoint } from '../services/APIs';

export function RenderRadioButtons(props) {
  const { onClick } = props;
  return (
    <div>
      <RadioButton
        onClick={onClick}
        data-testid="ingredient-search-radio"
        styleClass="radio-ingredient"
        labelClass="label-ingredient"
      >
        Ingrediente
      </RadioButton>
      <RadioButton
        onClick={onClick}
        data-testid="name-search-radio"
        styleClass="radio-name"
        labelClass="label-name"
      >
        Nome
      </RadioButton>
      <RadioButton
        onClick={onClick}
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
  const [searchValue, setSearchValue] = useState('');
  const [searchFlag, setSearchFlag] = useState(false);
  const [checkedRadio, setCheckedRadio] = useState('');

  const {
    type,
    setRecipesResults,
  } = useContext(AppContext);

  useEffect(() => {
    if (searchValue !== '' && checkedRadio !== '' && searchFlag === true) {
      const endpoints = {
        'radio-ingredient': 'ingredients',
        'radio-name': 'name',
        'radio-firstletter': 'firstLetter',
      };
      if (checkedRadio === 'radio-firstletter' && searchValue.length > 1) {
        return alert('Digite apenas 1 (uma) letra para buscar!');
      }
      searchByEndpoint(type, searchValue, setRecipesResults, endpoints[checkedRadio]);
      setSearchFlag(false);
    }
    return setSearchFlag(false);
  }, [type, setRecipesResults, searchFlag, searchValue, checkedRadio]);

  function searchInputValidation(event) {
    setSearchFlag(true);
    return setSearchValue(event.value);
  }

  function radioButtonValidation(event) {
    setSearchFlag(true);
    return setCheckedRadio(event.target.className);
  }

  return (
    <div className="search-bar">
      <form className="search-bar-form">
        <input data-testid="search-input" className="search-input" type="text" onBlur={(e) => searchInputValidation(e.target)} />
        <fieldset id="row-radio-buttons" className="row-radio-buttons">
          <div className="fieldset-flex">
            <RenderRadioButtons onClick={(e) => radioButtonValidation(e)} />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

RenderRadioButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};
