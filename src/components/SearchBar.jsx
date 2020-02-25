import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';
import '../style/SearchBar.css';
import { AppContext } from '../context/AppContext';
import { searchByEndpoint } from '../services/APIs';

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
        Nome
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
  const [searchValue, setSearchValue] = useState('');
  const {
    type,
    setRecipesResults,
    checkedRadio,
    setCheckedRadio,
    setSearchFlag,
    searchFlag,
  } = useContext(AppContext);

  useEffect(() => {
    if (checkedRadio !== '' && searchFlag === true) {
      const endpoints = {
        'radio-ingredient': 'ingredients',
        'radio-name': 'name',
        'radio-firstletter': 'firstLetter',
      };
      searchByEndpoint(type, searchValue, setRecipesResults, endpoints[checkedRadio]);
    }
  }, [type, searchValue, setRecipesResults, searchFlag, checkedRadio]);

  function formsValidation(event) {
    if (checkedRadio !== '') {
      if (checkedRadio === 'radio-firstletter' && event.value.length > 1) {
        return alert('Digite apenas 1 (uma) letra para buscar!');
      }
      setSearchFlag(true);
      setTimeout(() => {
        setSearchFlag(false);
      }, 500);
      return setSearchValue(event.value);
    }
    return null;
  }

  return (
    <div className="search-bar">
      <form className="search-bar-form">
        <input data-testid="search-input" className="search-input" type="text" onBlur={(e) => formsValidation(e.target)} />
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
