

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useLogin } from './LoginContext';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useLogin();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  })
  function handleLogin() {
    const validEmail = 'admin';
    const validPassword = 'admin';

    if (email === validEmail && password === validPassword) {
      login();
      navigate('/login/admindisplay');


    } else {
      setError('Invalid email or password.');
    }
  }

  return (
    <div className="login-container" data-aos="zoom-in">
      <div className="login-card">
        <h1 className="login-header">Login</h1>
        <input
          type="text"
          className="login-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="login-error">{error}</p>}
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;

