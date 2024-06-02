import React, { useState } from 'react';
import icon from '../assets/icon.png';
import '../styles/form.css';
import {login} from '../server/userController.js';

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

  const user = {username: username, password: password};

  const handleLogin = async (user) =>{
    try {
      const response = login(user);
      if(response === 400)
        alert("Invalid username or password");
      else if(response === null)
        alert("Login error!");
      else
        alert("Login Successful");
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handleLogin(user);
    // Handle form submission logic here
    // console.log('Username:', username);
    // console.log('Password:', password);
    // console.log('User Type:', userType);
    try {
      const response = await fetch('https://a26eaead00bcc9.lhr.life/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
  
      if (response.ok) {
        // Registration successful
        alert("Login successful!");
        console.log(response.data);
        // Optionally, you can redirect the user to another page after successful registration
        // Example: window.location.href = '/login';
        // window.location.href = '/';
      } else if (response.status === 400) {
        // Bad request: username already exists
        alert("Invalid username or password!");
      } else {
        // Registration failed
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred. Please try again later.");
    }
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
            <button type="button" className="button secondButton" onClick={onSwitchToSignUp}>Sign-up</button>
            <button type="submit" className="button">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
