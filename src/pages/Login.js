import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../style/Login.css';

function handleSubmit(event, setRedirect, userEmail) {
  event.preventDefault();
  localStorage.setItem('meals-token', '1');
  localStorage.setItem('cocktails-token', '1');
  localStorage.setItem('user', JSON.stringify({ email: userEmail }));
  setRedirect(true);
}

function formValidate(loginForm, setInvalidation) {
  const emailInput = loginForm.getElementsByClassName('form-input')[0];
  const passwordInput = loginForm.getElementsByClassName('form-input')[1];
  const errorLabel = loginForm.querySelector('.invalid-feedback');

  if (loginForm.checkValidity()) {
    errorLabel.textContent = '';
    return setInvalidation(false);
  }
  const invalidInputs = !emailInput.validity.valid || !passwordInput.validity.valid;
  if (invalidInputs) {
    errorLabel.textContent = emailInput.validationMessage || passwordInput.validationMessage;
  }
  return setInvalidation(true);
}

function createInputs(loginForm, isInvalid, setInvalidation, setUserEmail) {
  return (
    <div className="form-inputs">
      <input
        className="form-input"
        required
        type="email"
        placeholder="Digite seu Email"
        onChange={(e) => {
          setUserEmail(e.target.value);
          formValidate(loginForm, setInvalidation);
        }}
      />
      <input
        className="form-input"
        required
        minLength="6"
        type="password"
        placeholder="Digite sua Senha"
        onChange={() => formValidate(loginForm, setInvalidation)}
      />
      <p className="invalid-feedback" />
      <input className="form-submit" type="submit" value="Entrar" disabled={isInvalid} />
    </div>
  );
}

function Login() {
  const [shouldRedirect, setRedirect] = useState(false);
  const [loginForm, setForm] = useState(<form />);
  const [isInvalid, setInvalidation] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  if (shouldRedirect) return <Redirect to="/recipes" />;
  return (
    <div className="login">
      <h1>Login</h1>
      <form
        ref={(form) => setForm(form)}
        className="login-form"
        onSubmit={(event) => handleSubmit(event, setRedirect, userEmail)}
      >
        {createInputs(loginForm, isInvalid, setInvalidation, setUserEmail)}
      </form>
    </div>
  );
}

export default Login;
