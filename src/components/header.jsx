import icon from '../assets/icon.png'
import profileIcon from '../assets/profileIcon.png';
import { Link, useNavigate } from 'react-router-dom'
import '../styles/header.css';
import '../styles/addNewDocumentPopUpWindow.css';


const Header = () => {
  return (
    <div id="header-container">
     
      <div className="header-nav | font-black">
        <img src={icon} alt="icon" />
        <span className="name">LessonLab</span>

        <img src={profileIcon} alt="Profile" className="profile-button" /> 
      </div>
    </div>
  )
}

export default Header
