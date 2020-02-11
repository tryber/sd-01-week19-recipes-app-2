import React from 'react';
import '../style/SearchIcon.css';
import PropTypes from 'prop-types';

export default function SearchIcon(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      alt="Search Icon" 
      onClick={onClick}
      data-testid="search-top-btn"
      className="search-icon"
    />
  );
}

SearchIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
}
