import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddButton from '../assets/addButton.png';
import Lesson2 from '../assets/lesson2.png';
import BookIcon from '../assets/bookIcon.png';
import ClockIcon from '../assets/clockIcon.png';
import HatIcon from '../assets/hatIcon.png';
import FIcon from '../assets/fIcon.png';
import addButton from '../assets/addButton.png';
import { MoreHoriz, Close, Upload, DeleteOutline, Add, ImportContactsOutlined } from '@mui/icons-material';
import DocumentDropdownMenu from './documentDropdownMenu';
import Note from '../assets/note.png';
import '../styles/sideBarLesson.css';
import '../styles/sideBarPopUp.css';

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

  const handleDragEnter = (event) => {
    event.preventDefault();
    setShowAddFile(true);
  };

  const handleDragLeave = () => {
    setShowAddFile(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setShowAddFile(false);
    const files = Array.from(event.dataTransfer.files).filter(file => file.type === 'application/pdf');
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleRemoveFile = (index) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
  };

  useEffect(() => {
    const handleGlobalDragOver = (event) => {
      event.preventDefault();
      setShowAddFile(true);
    };

    const handleGlobalDragEnter = (event) => {
      event.preventDefault();
      setShowAddFile(true);
    };

    const handleGlobalDragLeave = (event) => {
      if (event.relatedTarget === null) {
        setShowAddFile(false);
      }
    };

    window.addEventListener('dragover', handleGlobalDragOver);
    window.addEventListener('dragenter', handleGlobalDragEnter);
    window.addEventListener('dragleave', handleGlobalDragLeave);

    return () => {
      window.removeEventListener('dragover', handleGlobalDragOver);
      window.removeEventListener('dragenter', handleGlobalDragEnter);
      window.removeEventListener('dragleave', handleGlobalDragLeave);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {popupContent && <div className="overlay" onClick={() => setPopupContent(null)}></div>}
      <div id="sideBar-container-lesson" style={{ userSelect: 'none' }}>
        <div className="sideBar-lesson">
          <div className="docu2" ref={dropdownRef}>
            <ImportContactsOutlined className="lesson-icon"/>
            <h1>Design Patterns</h1>
            <MoreHoriz className="more-icon-lesson" onClick={() => toggleDropdown("designPatterns")} />
            {activeDropdown === "designPatterns" && (
              <DocumentDropdownMenu type="Lesson" />
            )}
          </div>
          <div className="line"></div>
          <div className="files">
            <h1>Files</h1>
            <div
              className="addFile"
              style={{ display: showAddFile || uploadedFiles.length === 0 ? 'block' : 'none' }}
              onClick={handleDivClick}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
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
            {uploadedFiles.length > 0 && !showAddFile && (
              <div className="uploaded-files">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="uploaded-file">
                    {file.name}
                    <DeleteOutline className="remove-file-button" onClick={() => handleRemoveFile(index)} />
                  </div>
                ))}
                <button className="upload-new-button" onClick={handleDivClick}><Upload /> Upload New</button>
              </div>
            )}
          </div>
          <div className="line"></div>
          <div className="specifications">
            <div className="specifications-header">
              <h1>Specifications</h1>
              <Add className="add-button" onClick={() => togglePopup('specifications')}/>
            </div>
          </div>
          <div className="line"></div>
          <div className="pages">
            <div className="pages-header">
              <h1>Pages</h1>
              <Add className="add-button" onClick={() => togglePopup('pages')}/>
            </div>
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
                      <input type="radio" name="duration" value="simple" />
                      Simple
                    </label>
                    <label>
                      <input type="radio" name="duration" value="comprehensive" />
                      Comprehensive
                    </label>
                  </div>
                  <div className="learningOutcomes">
                    <img src={BookIcon} alt="Icon" />
                    <textarea type="text" placeholder="Provide learning outcomes..." />
                  </div>
                  <div className="custom">
                    <button>
                      <img src={AddButton} alt="Icon" id="addCustom" /> Add Custom
                    </button>
                  </div>
                  <div className="button">
                    <button>Save</button>
                  </div>
                </>
              )}
              {popupContent === 'pages' && (
                <>
                  <h1>Add New Page(s)</h1>
                  <div className="presets">
                    <img src={BookIcon} alt="Icon" />
                    <select>
                      <option value="" disabled selected>Select specifications presets...</option>
                    </select>
                  </div>
                  <div className="AddNewPages">
                    <img src={Note} alt="Icon" />
                    <input type="text" placeholder="Set pages..." />
                    <div className='checkBoxNamePage'>
                    <input type="checkbox" name="myCheckbox"/>
                    <label for="checkbox">Name each page</label>
                    </div>
                    <div className='checkBoxLimitPage'>
                    <input type="checkbox" name="myCheckbox"/>
                    <label for="checkbox">Limit each content to page only</label>
                    </div>
                    
                  </div>
                  <div className="buttonAdd">
                    <button>Add</button>
                  </div><br />
                  <div className="button">
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