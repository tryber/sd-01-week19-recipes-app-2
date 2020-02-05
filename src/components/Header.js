import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import UserIcon from './UserIcon';
import SearchIcon from './SearchIcon';
import SearchBar from './SearchBar';
import { AppContext, AppProvider } from '../context/AppContext';
import '../style/Header.css';

export default function Header(props) {

  const [displayUserIcon, setDisplayUserIcon] = useState(true);
  const [displaySearchIcon, setDisplaySearchIcon] = useState(true);
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [title, setTitle] = useState('Header');

  const displaySearchBarToggle = () => setDisplaySearchBar(!displaySearchBar);

  return (
    <Router>
      <div className="header-container">
        {displayUserIcon && (
          <Link to="/profile">
            <UserIcon />
          </Link>
        )}
        <span data-testid="page-title" className="header-title">{title}</span>
        {displaySearchIcon && <SearchIcon onClick={displaySearchBarToggle} />}
      </div>
      {displaySearchBar && <SearchBar />}
    </Router>
  );
}
