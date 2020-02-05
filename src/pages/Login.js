import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../style/Login.css';

function handleSubmit(event, setRedirect) {
  event.preventDefault();
  setRedirect(true)
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
