import React, { useState, useEffect} from 'react';
import icon from '../assets/icon.png';
import profileIcon from '../assets/profileIcon.png';
import '../styles/header.css';
import '../styles/addNewDocumentPopUpWindow.css';
import { Overlay } from './overlay.jsx';
import { Item } from './item.jsx'
import { useNavigate } from 'react-router-dom';
import LoginForm from './loginForm.jsx';
import SignUpForm from './signUpForm.jsx';

const Header = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); //TODO: Handle authentication
  const [isLoginForm, setIsLoginForm] = useState(true);

  const closeForm = () =>{
    setIsFormOpen(!isFormOpen);
    setIsLoginForm(true);
  }

  const closeShop = ()=>{
    setIsShopOpen(!isShopOpen)
  }

  const switchForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      setIsFormOpen(false); // Close form if user is already logged in
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/';
  };


  //TENTATIVE ITEMS, SHOULD BE REAL ITEMS DATA
  const items = [
    { name: '5 Tokens', amount: 5000, currency:'PHP', description: 'Tokens used to generate lesson and quiz.' },
    { name: '50 Tokens', amount: 50000, currency:'PHP', description: 'Tokens used to generate lesson and quiz.'},
    { name: '100 Tokens', amount: 100000, currency:'PHP', description: 'Tokens used to generate lesson and quiz.' },
    { name: '500 Tokens', amount: 500000, currency:'PHP', description: ' Tokens used to generate lesson and quiz.' },
    { name: '1000 Tokens', amount: 1000000, currency:'PHP', description: 'Tokens used to generate lesson and quiz.' },
    // Add more items as needed
  ];

  return (
    <div id="header-container" style={{ userSelect: 'none' }}>
      <div className="header-nav | font-black">
        <div className="logo" onClick={()=>navigate('/')}>
          <img src={icon} alt="icon" />
          <span className="name">LessonLab</span>
        </div>
        <button className='buy-button' onClick={closeShop}>Shop</button>
        {!isLoggedIn ? <button className='login-button' onClick={closeForm}>Login</button> : null}
        <Overlay isOpen={isFormOpen} onClose={closeForm} overlayName={"LessonLab"}>
        <div className='items'>
            {isLoginForm ? <LoginForm onSwitchToSignUp={switchForm} /> : <SignUpForm  onSwitchToLogin={switchForm}/>}
          </div>
        </Overlay>
        <Overlay isOpen={isShopOpen} onClose={closeShop} overlayName={"Token Shop"}>
          <div className='items'>
          {items.map((item, index) => (
            <Item key={index} item={item}/>
          ))}
          </div>
        </Overlay>
        {isLoggedIn && (
          <div className="profile-button-container">
            <img src={profileIcon} alt="Profile" className="profile-button" />
            <div className="dropdown-menu">
              <button>Profile</button>
              <button>Settings</button>
              <button onClick={handleLogout} >Logout</button>
            </div>
          </div>
        )} 
      </div>
    </div>
  );
};

export default Header;
