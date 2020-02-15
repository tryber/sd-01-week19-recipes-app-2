import React from 'react';
import PropTypes from 'prop-types';
import '../style/SearchIcon.css';

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
};
