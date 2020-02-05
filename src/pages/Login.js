import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../style/Login.css';

function handleSubmit(event, setRedirect) {
  event.preventDefault();
  localStorage.setItem('meals-token', '1');
  localStorage.setItem('cocktails-token', '1');
  setRedirect(true)
}

function saveUserEmail(value) {
  localStorage.setItem('user', JSON.stringify({email: value}));
}

function Login() {
  const [redirect, setRedirect] = useState(false);
  if (redirect) return <Redirect to="/recipes" />
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={(event) => handleSubmit(event, setRedirect)} className="login-content">
        <input
          className="form-input"
          required
          type="email"
          placeholder="Digite seu Email"
          onChange={(e) => saveUserEmail(e.target.value)}
        />
        <input
          className="form-input"
          required
          minLength="6"
          type="password"
          placeholder="Digite sua Senha"
        />
        <input className="form-submit" type="submit" value="Entrar" />
      </form>
    </div>
  );
}

export default Login;
