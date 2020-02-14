import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../style/Login.css';
import Footer from '../components/Footer';

function handleSubmit(event, setRedirect, userEmail) {
  event.preventDefault();
  localStorage.setItem('meals-token', '1');
  localStorage.setItem('cocktails-token', '1');
  localStorage.setItem('user', JSON.stringify({ email: userEmail }));
  setRedirect(true);
}

function formValidate() {
  const loginForm = document.querySelector('.login-form');
  const emailInput = loginForm.querySelectorAll('.form-input')[0];
  const passwordInput = loginForm.querySelectorAll('.form-input')[1];
  const errorLabel = loginForm.querySelector('.invalid-feedback');
  const buttonSubmit = loginForm.querySelector('.form-submit');

  if (loginForm.checkValidity()) {
    errorLabel.textContent = '';
    buttonSubmit.disabled = false;
    return true;
  }
  const invalidInputs = !emailInput.validity.valid || !passwordInput.validity.valid;
  if (invalidInputs) {
    errorLabel.textContent = emailInput.validationMessage || passwordInput.validationMessage;
  }
  buttonSubmit.disabled = true;
  return false;
}

function Login() {
  const [shouldRedirect, setRedirect] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  if (shouldRedirect) return <Redirect to="/recipes" />;
  return (
    <div >
    <div className="login">
      <h1>Login</h1>
      <form className="login-form" onSubmit={(e) => handleSubmit(e, setRedirect, userEmail)}>
        <input
          className="form-input"
          required
          type="email"
          placeholder="Digite seu Email"
          onChange={(e) => {
            setUserEmail(e.target.value);
            formValidate();
          }}
        />
        <input
          className="form-input"
          required
          minLength="6"
          type="password"
          placeholder="Digite sua Senha"
          onChange={() => formValidate()}
        />
        <p className="invalid-feedback" />
        <input className="form-submit" type="submit" value="Entrar" disabled />
      </form>
    </div>
    <Footer />
    </div>
  );
}

export default Login;
