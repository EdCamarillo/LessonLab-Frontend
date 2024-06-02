import React, { useState } from 'react';
import icon from '../assets/icon.png';
import '../styles/form.css';
import { register } from '../server/userController.js';

const SignupForm = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('teacher');

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  // const user = {username: username, password: password};

  // const handleSignUp = async (user) =>{
  //   try {
  //     const response = register(user);
  //     if(response === 400)
  //       alert("Username already exist!");
  //     else
  //       alert("Sign-up Successful!");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = {username: username, password: password};

    try {
      const response = await register(user);

      if(response)
        window.location.href = '/';
      else
        alert("Username already exist!");
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred. Please try again later.");
    }
    // try {
    //   // const response = await fetch(`${process.env.REACT_APP_BASE_URL}api/users/register`, {
    //     const response = await fetch(`https://e5a3-112-208-66-166.ngrok-free.app/api/users/register`, {
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
    //     // Registration successful
    //     alert("Registration successful!");
    //     console.log(response.data);
    //     // Optionally, you can redirect the user to another page after successful registration
    //     // Example: window.location.href = '/login';
    //     window.location.href = '/';
        
    //   } else if (response.status === 400) {
    //     // Bad request: username already exists
    //     alert("Username already exists. Please choose a different username.");
    //   } else {
    //     // Registration failed
    //     alert("Registration failed. Please try again.");
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   alert("An error occurred. Please try again later.");
    // }
  };
  

  return (
    <div className="container sign-up-form">
      <img src={icon} alt="LessonLab Icon" className="icon" />
      <h2 className="lessonlabText">Join us now and get started!</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="Username" className="label">Username:</label>
          <input
            type="Username"
            id="Username"
            value={username}
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
        <div className="form-group">
          <label htmlFor="confirmPassword" className="label">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
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
          <button type="button" className="button secondButton" onClick={onSwitchToLogin}>Back</button>
          <button type="submit" className="button">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
