import React, { useState } from 'react';
import '../styles/sideBar.css';
import addButton from '../assets/addButton.png';
import DocumentItem from './documentItem';

const SideBar = () => {
  const documents = [
    { name: 'Design Patterns', type: 'Lesson' },
    { name: 'Genetic Algorithms', type: 'Quiz' },
    { name: 'Blockchain', type: 'Lesson' },
    { name: 'Quantum Computing', type: 'Lesson' },
  ]

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (buttonId) => {
    setActiveDropdown(activeDropdown === buttonId ? null : buttonId);
  };

  const handleOverlayClick = () => {
    setActiveDropdown(null); // Close the dropdown menu
  };

  return (
    <div id="sideBar-container" style={{ userSelect: 'none' }}>
      <div className="sideBar">
        <div className="docu">
          <h1>My documents</h1>
          <img src={addButton} alt="Add" className="addButton" />
        </div>
        <div className='dummyItem'>
          {documents.map((document, index) => (
            <DocumentItem key={index} name={document.name} type={document.type} activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} />
          ))}
        </div>
      </div>
      {activeDropdown 
        ? <div className='dropdown-menu-overlay' onClick={handleOverlayClick}></div>
        : <></>
      }
    </div>
  );
};

export default SideBar;
