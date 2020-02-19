import React from 'react';
import PropTypes from 'prop-types';

export default function RadioButton(props) {
  const {
    styleClass,
    labelClass,
    onClick,
    children,
  } = props;
  return (
    <label htmlFor="ingredient-search-radio" className={labelClass}>
      <input
        name="row-radio-buttons"
        onClick={onClick}
        className={styleClass}
        type="radio"
      />
      {children}
    </label>
  );
}

RadioButton.propTypes = {
  styleClass: PropTypes.string.isRequired,
  labelClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
