import React from 'react';
import '../style/Login.css';

function Login() {
  return (
    <form className="login-content">
      <input type="email" placeholder="Digite seu Email" />
      <input type="password" placeholder="Digite sua Senha" />
    </form>
  );
}

export default Login;
