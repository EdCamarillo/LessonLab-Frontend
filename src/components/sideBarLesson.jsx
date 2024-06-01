import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddButton from '../assets/addButton.png';
import Lesson2 from '../assets/lesson2.png';
import Download from '../assets/download.png';
import Import from '../assets/import.png';
import Rename from '../assets/rename.png';
import Delete from '../assets/delete.png';
import FIcon from '../assets/fIcon.png'
import BookIcon from '../assets/bookIcon.png'
import ClockIcon from '../assets/clockIcon.png'
import HatIcon from '../assets/hatIcon.png'
import addButton from '../assets/addButton.png'
import Note from '../assets/note.png'
import '../styles/sideBarLesson.css';
import '../styles/specifications.css';
import { MoreHoriz, Close, PropaneSharp } from '@mui/icons-material';
import DocumentDropdownMenu from './documentDropdownMenu';

const SideBarLesson = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [popupContent, setPopupContent] = useState(null);
  const navigate = useNavigate();

  const togglePopup = (content) => {
    setShowPopup(!showPopup);
    setSelectedOption(null);
    setPopupContent(content);
  };

 
  const handleOptionSelect = (option) => {
    navigate(`/${option}`);
  };

  // const handleConfirmClick = () => {
  //   if (selectedOption) {
  //     navigate(`/${selectedOption}`);
  //   }
  // };

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
    <div>
    {showPopup && <div className="overlay" onClick={togglePopup}></div>}
    <div id="sideBar-container" style={{ userSelect: 'none' }}>
      <div className="sideBar-lesson">
        <div className="docu2">
          <img src={Lesson2} alt="lesson" className="Lesson" />
          <h1>Design Patters</h1>
          <MoreHoriz className='more-icon-lesson' onClick={() => toggleDropdown("designPatterns")} />
          {activeDropdown === "designPatterns" && (
          <DocumentDropdownMenu type={'Lesson'} />
        )}
        </div>
        <div className='line'></div>
        <div className='files'>
          <h1>Files</h1>
          <div className='addFile'>
            <p>No files uploaded yet <br />
              Drag and drop documents here or click to upload</p>
          </div>
        </div>
        
        <div className='specifications'>
            <div className='line'></div>
            <h1>Specifications</h1>
            <button onClick={() => togglePopup('specifications')}>
              <img src={AddButton} alt="Add" className="addButton" />
            </button>
          </div>
          <div className='pages'>
            <div className='line'></div>
            <h1>Pages</h1>
            <button onClick={() => togglePopup('pages')}>
              <img src={AddButton} alt="Add" className="addButton" />
            </button>
          </div>
      </div>

      {/* Popup Window */}
      {showPopup && (
  <div className="popup-container-lesson">
    <div className="popup-content-lesson">
      <span className="popup-close" onClick={togglePopup}>
        <Close />
      </span>
      {popupContent === 'specifications' && (
        <>
          <h1>Specifications Name 1</h1>
          {/* Additional content for specifications */}
          <div className="topic">
            <img src={BookIcon} alt="Icon" />
            <input type="text" placeholder="Provide a topic..." />
          </div>
          <div className="clock">
            <img src={ClockIcon} alt="Icon" />
            <input type="text" placeholder="Set a study duration..." />
          </div>
          <div className="dropdown-menu-duration">
            <select>
              {/* <option value="" disabled selected hidden>Hours</option> */}
              {/* Add options here */}
            </select>
          </div>
          <br/>
          <div className="gLevel">
            <img src={HatIcon} alt="Icon" />
              <label>
                <input type="radio" name="duration" value="elementary" />
                Elementary
              </label>
              <label>
                <input type="radio" name="duration" value="highschool" />
                High School
              </label>
              <label>
                <input type="radio" name="duration" value="college" />
                College
              </label>
          </div>
          <div className="level">
            <img src={FIcon} alt="Icon" />
              <label>
                <input type="radio" name="duration" value="elementary" />
                Simple
              </label>
              <label>
                <input type="radio" name="duration" value="highschool" />
                Comprehensive
              </label>
          </div>
          <div className="learningOutcomes">
            <img src={BookIcon} alt="Icon" />
            <textarea type="text" placeholder="Provide learning outcomes..." />
         </div>
         <div className='custom'>
            <button>  
              <img src={addButton} alt="Icon" id='addCustom'/> Add Custom
            </button>
            </div>
            <div className='button'> <button>Save</button></div>
           
           
        </>
      )}
      {popupContent === 'pages' && (
        <>
          <h1>Add New Page(s)</h1>
          {/* Additional content for pages */}
          <div className="presets">
            <img src={BookIcon} alt="Icon" />
           <select>
           <option value="" disabled selected>Select specifications presets...</option>
           </select>
          </div>
          <div className="pages">
            <img src={Note} alt="Icon" />
            <input type="text" placeholder="Set pages..." />
          </div>
          <div className='buttonAdd'> 
          <button>Add</button>
          </div><br/>
          <div className='button'> 
          <button>Add & Generate</button>
          </div>
        </>
      )}
    </div>
  </div>
)}

    </div>
    </div>
  );
};

export default SideBarLesson;
