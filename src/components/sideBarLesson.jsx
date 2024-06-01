import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddButton from '../assets/addButton.png';
import Lesson2 from '../assets/lesson2.png';
import BookIcon from '../assets/bookIcon.png';
import ClockIcon from '../assets/clockIcon.png';
import HatIcon from '../assets/hatIcon.png';
import FIcon from '../assets/fIcon.png';
import addButton from '../assets/addButton.png';
import { MoreHoriz, Close } from '@mui/icons-material';
import DocumentDropdownMenu from './documentDropdownMenu';
import '../styles/sideBarLesson.css';
import '../styles/specifications.css';

const SideBarLesson = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [popupContent, setPopupContent] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showAddFile, setShowAddFile] = useState(false);
  const dropdownRef = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const togglePopup = (content) => {
    setPopupContent(popupContent === content ? null : content);
  };

  const toggleDropdown = (buttonId) => {
    setActiveDropdown(activeDropdown === buttonId ? null : buttonId);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveDropdown(null);
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files).filter(file => file.type === 'application/pdf');
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setShowAddFile(true);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setShowAddFile(false);
    const files = Array.from(event.dataTransfer.files).filter(file => file.type === 'application/pdf');
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {popupContent && <div className="overlay" onClick={() => setPopupContent(null)}></div>}
      <div id="sideBar-container" style={{ userSelect: 'none' }}>
        <div className="sideBar-lesson">
          <div className="docu2" ref={dropdownRef}>
            <img src={Lesson2} alt="lesson" className="Lesson" />
            <h1>Design Patterns</h1>
            <MoreHoriz className='more-icon-lesson' onClick={() => toggleDropdown("designPatterns")} />
            {activeDropdown === "designPatterns" && (
              <DocumentDropdownMenu type={'Lesson'} />
            )}
          </div>
          <div className='line'></div>
          <div className='files'>
            <h1>Files</h1>
            <div
              className='addFile'
              style={{ display: showAddFile || uploadedFiles.length === 0 ? 'block' : 'none' }}
              onClick={handleDivClick}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <p>No files uploaded yet <br />
                Drag and drop documents here or click to upload</p>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="application/pdf"
                multiple
                onChange={handleFileChange}
              />
            </div>
            {uploadedFiles.length > 0 && (
              <div className='uploaded-files'>
                {uploadedFiles.map((file, index) => (
                  <div key={index} className='uploaded-file'>
                    {file.name}
                  </div>
                ))}
                <button className='upload-new-button' onClick={handleDivClick}>Upload New</button>
              </div>
            )}
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

        {popupContent && (
          <div className="popup-container-lesson">
            <div className="popup-content-lesson">
              <span className="popup-close" onClick={() => setPopupContent(null)}>
                <Close />
              </span>
              {popupContent === 'specifications' && (
                <>
                  <h1>Specifications Name 1</h1>
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
                      {/* Add options here */}
                    </select>
                  </div>
                  <br />
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
                      <img src={addButton} alt="Icon" id='addCustom' /> Add Custom
                    </button>
                  </div>
                  <div className='button'>
                    <button>Save</button>
                  </div>
                </>
              )}
              {popupContent === 'pages' && (
                <>
                  <h1>Pages Popup Content</h1>
                  {/* Additional content for pages */}
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