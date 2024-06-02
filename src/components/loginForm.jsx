import React, { useState } from 'react';
import icon from '../assets/icon.png';
import '../styles/form.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container">
        <img src={icon} alt="LessonLab Icon" className="icon" />
        <h2>LessonLab</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="email" className="label">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="input"
            required
          />
        </div>
        <div className="button-container">
            <button type="submit" className="button">Login</button>
            <button type="button" className="button sign-up-button">Sign-up</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
