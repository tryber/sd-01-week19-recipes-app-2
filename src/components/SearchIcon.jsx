import React from 'react';
import PropTypes from 'prop-types';
import '../style/SearchIcon.css';
import SearchImage from '../img/search-icon.svg';

export default function SearchIcon(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      alt="Search Icon"
      data-testid="search-top-btn"
      className="search-icon"
    >
      <img onClick={onClick} src={SearchImage} alt="search icon" />
    </button>
  );
}

SearchIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};
