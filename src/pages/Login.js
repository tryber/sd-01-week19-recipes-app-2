import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../style/Login.css';

function handleSubmit(event, setRedirect) {
  event.preventDefault();
  localStorage.setItem('meals-token', '1');
  localStorage.setItem('cocktails-token', '1');
  setRedirect(true);
}

function formValidate(loginForm, setInvalidation) {
  const emailInput = loginForm.firstChild;
  const passwordInput = emailInput.nextSibling;
  const errorLabel = emailInput.parentNode.querySelector('.invalid-feedback');

  if (loginForm.checkValidity() === true) {
    errorLabel.textContent = '';
    setInvalidation(false);
  }
  else {
    if (!emailInput.validity.valid || !passwordInput.validity.valid) {
      errorLabel.textContent = emailInput.validationMessage || passwordInput.validationMessage;
    }
    setInvalidation(true);
  }
}

function createInputs(loginForm, isInvalid, setInvalidation) {
  return (
    <>
      <input
        className="form-input"
        required
        type="email"
        placeholder="Digite seu Email"
        onChange={(e) => {
          localStorage.setItem('user', JSON.stringify({ email: e.target.value }));
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
      <p className="invalid-feedback"></p>
      <input className="form-submit" type="submit" value="Entrar" disabled={isInvalid} />
    </>
  );
}

function Login() {
  const [shouldRedirect, setRedirect] = useState(false);
  const [loginForm, setForm] = useState(<form />);
  const [isInvalid, setInvalidation] = useState(true);
  
  if (shouldRedirect) return <Redirect to="/recipes" />;
  return (
    <div className="login">
      <h1>Login</h1>
      <form
        ref={(form) => setForm(form)}
        className="login-form"
        onSubmit={(event) => handleSubmit(event, setRedirect)}
      >
        {createInputs(loginForm, isInvalid, setInvalidation)}
      </form>
    </div>
  );
}

export default Login;
