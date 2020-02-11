import React from 'react';
import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import '../style/Profile.css';

function clearStorageEmail() {
  return JSON.parse(localStorage.removeItem('user')).email;
}

function Profile() {
  return (
    <div className="profile">
      {/* <Header /> */}
      <div className="profile-screen">
        <p className="user-email">{JSON.parse(localStorage.getItem('user')).email}</p>
        <div>
          <Link to="/done-recipes">
            <button className="profile-button">
              Receitas Feitas
            </button>
          </Link>
          <Link to="/favorite-recipes">
            <button className="profile-button">
              Receitas Favoritas
            </button>
          </Link>
          <Link to="/">
            <button className="profile-button" onClick={clearStorageEmail}>
              Sair
            </button>
          </Link>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Profile;
