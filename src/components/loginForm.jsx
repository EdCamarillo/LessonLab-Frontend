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


  // const handleLogin = async (user) =>{
  //   try {
  //     const response = login(user);
  //     if(response === 400)
  //       alert("Invalid username or password");
  //     else if(response === null)
  //       alert("Login error!");
  //     else
  //       alert("Login Successful");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };

    try {
      const token = await login(user);

      if (token && token !== 1) {
        localStorage.setItem('token', token);
        window.location.href = '/';
      }else if(token === 1){
        alert("Invalid username or password!");
      } 
      else {
        alert("Client error!");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred. Please try again later.");
    }
    // try {
    //   // const response = await fetch(`${process.env.REACT_APP_BASE_URL}api/users/login`, {
    //     const response = await fetch(`https://e5a3-112-208-66-166.ngrok-free.app/api/users/login`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       username: username,
    //       password: password,
    //     }),
    //   });
  
    //   if (response.ok) {
    //     console.log(response.data);
    //     const token = await response.text();
    //     // const token = data;
    //     // const token = response.token;
    //     // const token = response;

    //     // const token = login(user);

    //     if (token) {
    //       // Store the token (e.g., in local storage)
    //       localStorage.setItem('token', token);
    //       window.location.href = '/';
    //       // Optionally, you can redirect the user to another page after successful login
    //       // Example: window.location.href = '/dashboard';
    //     }
    //   } else if (response.status >= 400) {
    //     alert("Invalid username or password!");
    //   } else{
    //     alert("Login failed. Please try again.");
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   alert("An error occurred. Please try again later.");
    // }
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
