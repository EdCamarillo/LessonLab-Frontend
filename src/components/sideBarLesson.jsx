import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import addButton from '../assets/addButton.png';
import Lesson2 from '../assets/lesson2.png';
import Download from '../assets/download.png'
import Import from '../assets/import.png'
import Rename from '../assets/rename.png'
import Delete from '../assets/delete.png'
import EllipsisBtn from '../assets/ellipsis_btn.png'
import AddButton from '../assets/addButton.png'
import '../styles/addNewDocumentPopUpWindow.css';
import '../styles/sideBarLesson.css';
import { MoreHoriz } from '@mui/icons-material';


const SideBarLesson = () => {
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
      <div className="sideBar-lesson">
        <div className="docu2">
        <img src={Lesson2} alt="lesson" className="Lesson" />
          <h1>Design Patters</h1>
            <MoreHoriz className='more-icon-lesson' onClick={() => toggleDropdown("designPatterns")}/>
            {activeDropdown === "designPatterns" && (
              <div className="dropdown-menu-lesson">
                <ul className='dropdown-item'>
                  <li><img src={Download} alt="download" className="download" /> Download Lesson</li>
                  <li><img src={Import} alt="import" className="import" /> Import Lesson</li>
                  <li><img src={Rename} alt="rename" className="rename" /> Rename Lesson</li>
                  <li className="horizontal-line"></li>
                  <li><img src={Delete} alt="delete" className="delete" /> Delete Lesson</li>
              </ul>
              </div>
            )}
        </div>
        <div className='line'></div>
        <div className='files'>
        <h1>Files</h1>
            <div className='addFile'>
                <p>No files uploaded yet <br/>
                Drag and drop documents here or click to upload</p>
            </div>
          
        </div>
        
        <div className='specifications'>
        <div className='line'></div>
        <h1>Specifications</h1>
        <button>
        <img src={AddButton} alt="Add" className="addButton" />
        </button>
          
        </div>
        <div className='pages'>
        <div className='line'></div>
        <h1>Pages</h1>
        <button>
        <img src={AddButton} alt="Add" className="addButton" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default SideBarLesson;
