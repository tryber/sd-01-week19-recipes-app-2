import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  // header States
  const [displayUserIcon, setDisplayUserIcon] = useState(true);
  const [displaySearchIcon, setDisplaySearchIcon] = useState(true);
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [title, setTitle] = useState('Header');
  const [displayHeader, setDisplayHeader] = useState(true);
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
    displayHeader,
    setDisplayHeader
  };

  return (
    <AppContext.Provider value={{ context }}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
