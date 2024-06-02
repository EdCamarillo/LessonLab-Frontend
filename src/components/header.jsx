import React, {useState} from 'react';
import icon from '../assets/icon.png';
import profileIcon from '../assets/profileIcon.png';
import '../styles/header.css';
import '../styles/addNewDocumentPopUpWindow.css';
import { Overlay } from './overlay.jsx';
import { Item } from './item.jsx'
import { useNavigate } from 'react-router-dom';
import LoginForm from './loginForm.jsx';

const Header = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false); //set to False if samok
  const [isLoggedIn, setIsLoggedIn] = useState(true); //TODO: Handle authentication

  const closeLoginForm = () =>{
    setIsLoginFormOpen(!isLoginFormOpen);
  }

  const closeShop = ()=>{
    setIsShopOpen(!isShopOpen)
  }

  const navigate = useNavigate();

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
        {isLoggedIn ? <button className='login-button' onClick={closeLoginForm}>Login</button> : null}
        <Overlay isOpen={isLoginFormOpen} onClose={closeLoginForm} overlayName={"Login"}>
          <div className='items'>
            <LoginForm/>
          </div>
        </Overlay>
        <Overlay isOpen={isShopOpen} onClose={closeShop} overlayName={"Token Shop"}>
          <div className='items'>
          {items.map((item, index) => (
            <Item key={index} item={item}/>
          ))}
          </div>
        </Overlay>
        <img src={profileIcon} alt="Profile" className="profile-button"/> 
      </div>
    </div>
  );
};

export default Header;
