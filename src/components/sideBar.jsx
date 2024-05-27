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
            {activeDropdown === "designPatterns" && (
              <div className="dropdown-menu">
                <ul className='dropdown-item'>
                  <li><img src={Download} alt="download" className="download" /> Download Lesson</li>
                  <li><img src={Import} alt="import" className="import" /> Import Lesson</li>
                  <li><img src={Rename} alt="rename" className="rename" /> Rename Lesson</li>
                  <li className="horizontal-line"></li>
                  <li><img src={Delete} alt="delete" className="delete" /> Delete Lesson</li>
              </ul>
              </div>
            )}
          </button>
          <button className='dummy'>Generic Algorithms 
            <img 
              src={EllipsisBtn} 
              alt="EllipseBtn" 
              className="EllipseBtn" 
              onClick={() => toggleDropdown("genericAlgorithms")} 
            />
            {activeDropdown === "genericAlgorithms" && (
              <div className="dropdown-menu">
                <ul className='dropdown-item'>
                  <li><img src={Download} alt="download" className="download" /> Download Lesson</li>
                  <li><img src={Import} alt="import" className="import" /> Import Lesson</li>
                  <li><img src={Rename} alt="rename" className="rename" /> Rename Lesson</li>
                  <li className="horizontal-line"></li>
                  <li><img src={Delete} alt="delete" className="delete" /> Delete Lesson</li>
              </ul>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
