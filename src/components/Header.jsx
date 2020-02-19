import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserIcon from './UserIcon';
import SearchIcon from './SearchIcon';
import SearchBar from './SearchBar';
import { AppContext } from '../context/AppContext';
import '../style/Header.css';

export default function Header() {
  const {
<<<<<<< HEAD
    displayUserIcon,
=======
>>>>>>> master
    displaySearchIcon,
    displaySearchBar,
    title,
    displayHeader,
    displaySearchBarToggle,
  } = useContext(AppContext);

  return (
<<<<<<< HEAD
    <div>
      <div className={`header-container ${!displayHeader ? 'display-none' : undefined}`}>
        {displayUserIcon && (
          <Link to="/profile">
            <UserIcon />
          </Link>
        )}
        <span data-testid="page-title" className="header-title">{title}</span>
        {displaySearchIcon && <SearchIcon onClick={displaySearchBarToggle} />}
      </div>
      <div>
        {displaySearchBar && <SearchBar />}
      </div>
    </div>
  );
=======
    <>
      <div className={`header-container ${!displayHeader ? 'display-none' : undefined }`}>
          <div className="header-content">
              <Link to="/profile">
                <UserIcon />
              </Link>
            <span data-testid="page-title" className="header-title">{title}</span>
            {displaySearchIcon && <SearchIcon onClick={displaySearchBarToggle} />}
          </div>
      </div>
      <>
      {displaySearchBar && <SearchBar />}
      </>
    </>
  )
>>>>>>> master
}
