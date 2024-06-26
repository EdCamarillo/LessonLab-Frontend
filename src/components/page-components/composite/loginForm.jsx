import React, { useState } from 'react';
import icon from '../../../assets/icon.png';
import '../../../styles/form.css';

const LoginForm = ({ onSwitchToSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('teacher');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('User Type:', userType);
  };

  return (
    <div className="container login-form">
        <img src={icon} alt="LessonLab Icon" className="lessonlabIcon" />
        <h2 className="lessonlabText">Welcome back!<br/>Log in to continue.</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="Username" className="label">Username:</label>
          <input
            type="Username"
            id="Username"
            value={username}
            onChange={handleUsernameChange}
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
        <div className="form-group">
          <label htmlFor="userType" className="label">Login as:</label>
          <select
            id="userType"
            value={userType}
            onChange={handleUserTypeChange}
            className="input"
          >
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>
        <div className="button-container">
            <button type="submit" className="button">Login</button>
            <button type="button" className="button secondButton" onClick={onSwitchToSignUp}>Sign-up</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
