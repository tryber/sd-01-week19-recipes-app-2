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

function Bar(props) {
  const { SearchFlag, SearchValue, CheckedRadio } = props;

  function searchInputValidation(event) {
    SearchFlag(true);
    return SearchValue(event.value);
  }

  function radioButtonValidation(event) {
    SearchFlag(true);
    return CheckedRadio(event.target.className);
  }

  return (
    <form className="search-bar-form">
      <input
        data-testid="search-input"
        className="search-input"
        type="text"
        onBlur={(e) => searchInputValidation(e.target)}
      />
      <fieldset id="row-radio-buttons" className="row-radio-buttons">
        <div className="fieldset-flex">
          <RenderRadioButtons onClick={(e) => radioButtonValidation(e)} />
        </div>
      </fieldset>
    </form>
  );
}

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [searchFlag, setSearchFlag] = useState(false);
  const [checkedRadio, setCheckedRadio] = useState('');
  const { type, setRecipesResults } = useContext(AppContext);
  useEffect(() => {
    async function getSearchByEndpoint() {
      const endpoints = {
        'radio-ingredient': 'ingredients',
        'radio-name': 'name',
        'radio-firstletter': 'firstLetter',
      };
      const searchedRecipes = await searchByEndpoint(type, searchValue, endpoints[checkedRadio]);
      setRecipesResults(searchedRecipes);
    }
    if (searchValue !== '' && checkedRadio !== '' && searchFlag === true) {
      if (checkedRadio === 'radio-firstletter' && searchValue.length > 1) {
        return alert('Digite apenas 1 (uma) letra para buscar!');
      }
      getSearchByEndpoint();
      setSearchFlag(false);
    }
    return setSearchFlag(false);
  }, [type, setRecipesResults, searchFlag, searchValue, checkedRadio]);
  return (
    <div className="search-bar">
      <Bar SearchFlag={setSearchFlag} SearchValue={setSearchValue} CheckedRadio={setCheckedRadio} />
    </div>
  );
}

RenderRadioButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};
