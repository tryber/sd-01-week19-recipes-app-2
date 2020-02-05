import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = React.createContext();

export default function AppProvider(props) {
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
