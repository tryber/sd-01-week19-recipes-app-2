import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export default function AppProvider(props) {
  // header States
  const [displayUserIcon, setDisplayUserIcon] = useState(true);
  const [displaySearchIcon, setDisplaySearchIcon] = useState(true);
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [title, setTitle] = useState('Header');
  const displaySearchBarToggle = () => setDisplaySearchBar(!displaySearchBar);

  const context = {
    displayUserIcon,
    displaySearchIcon,
    displaySearchBar,
    title,
    displaySearchBarToggle,
    setDisplayUserIcon,
    setDisplaySearchIcon,
    setTitle,
  };
  const { children } = props;
  return (
    <AppContext.Provider value={{ context }}>
      {children}
    </AppContext.Provider>
  );
}

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};
