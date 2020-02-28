import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Footer from '../components/Footer';
import '../style/Profile.css';

function clearStorageEmail() {
  return JSON.parse(localStorage.removeItem('user')).email;
}

function Profile() {
  const { setTitle } = useContext(AppContext);
  setTitle('Perfil');

  return (
    <div className="profile">
      {/* <Header /> */}
      <div className="profile-screen">
        <p className="user-email">{JSON.parse(localStorage.getItem('user')).email}</p>
        <div>
          <Link to="/done-recipes">
            <button type="button" className="profile-button">
              Receitas Feitas
            </button>
          </Link>
          <Link to="/favorite-recipes">
            <button type="button" className="profile-button">
              Receitas Favoritas
            </button>
          </Link>
          <Link to="/">
            <button type="button" className="profile-button" onClick={clearStorageEmail}>
              Sair
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
