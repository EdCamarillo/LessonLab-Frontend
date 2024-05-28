import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../styles/sideBar.css';
import addButton from '../assets/addButton.png';
import Download from '../assets/download.png'
import Import from '../assets/import.png'
import Rename from '../assets/rename.png'
import Delete from '../assets/delete.png'
import EllipsisBtn from '../assets/ellipsis_btn.png'
import '../styles/addNewDocumentPopUpWindow.css';
import DocumentDropdownMenu from './documentDropdownMenu';


const SideBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (buttonId) => {
    if (activeDropdown === buttonId) {
      // If the clicked dropdown is already active, close it
      setActiveDropdown(null);
    } else {
      // If another dropdown is active, close it
      setActiveDropdown(buttonId);
    }
  };

  return (
    <div id="sideBar-container" style={{ userSelect: 'none' }}>
      <div className="sideBar">
        <div className="docu">
          <h1>My documents</h1>
          <img src={addButton} alt="Add" className="addButton" />
        </div>
        <div className='dummyItem'>
          <button className='dummy'>Design Patterns 
            <img 
              src={EllipsisBtn} 
              alt="EllipseBtn" 
              className="EllipseBtn" 
              onClick={() => toggleDropdown("designPatterns")} 
            />
            <DocumentDropdownMenu name='designPatterns' activeDropdown={activeDropdown} type='Lesson'/>
          </button>
          <button className='dummy'>Genetic Algorithms 
            <img 
              src={EllipsisBtn} 
              alt="EllipseBtn" 
              className="EllipseBtn" 
              onClick={() => toggleDropdown("geneticAlgorithms")} 
            />
            <DocumentDropdownMenu name='geneticAlgorithms' activeDropdown={activeDropdown} type='Lesson'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
