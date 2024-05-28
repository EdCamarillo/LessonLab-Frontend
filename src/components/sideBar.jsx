import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../styles/sideBar.css';
import addButton from '../assets/addButton.png';
import '../styles/addNewDocumentPopUpWindow.css';
import DocumentItem from './documentItem';

const SideBar = () => {

  const documents = ['Design Patterns', 'Genetic Algorithms', 'Blockchain', 'Quantum Computing'] // TODO: fetch documents here

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
          {documents.map((document, index) => (
            <DocumentItem key={index}  name={document} activeDropdown={activeDropdown} type='Lesson' toggleDropdown={toggleDropdown} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
