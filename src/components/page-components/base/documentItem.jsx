import React, { useRef, useEffect } from 'react';
import '../../../styles/sideBar.css';
import { ImportContactsOutlined, ArticleOutlined, MoreHoriz } from '@mui/icons-material';
import DocumentDropdownMenu from './documentDropdownMenu';

const DocumentItem = (props) => {
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    props.toggleDropdown(props.name);
  };

  const handleClick = () => {
    if (props.activeDropdown === props.name) {
      // If dropdown is already active, toggle it off
      toggleDropdown(null);
    } else {
      // Otherwise, toggle it on
      toggleDropdown(props.name);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      props.toggleDropdown(null);
    }
  };

  useEffect(() => {
    if (props.activeDropdown === props.name) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [props.activeDropdown]);

  return (
    <div className='document-item' ref={dropdownRef}>
      <button className='dummy'>
        {props.type === 'Lesson' ? <ImportContactsOutlined className="lesson-icon" /> : <ArticleOutlined className="quiz-icon" />}
        <span>{props.name}</span>
        <MoreHoriz className="more-icon" onClick={handleClick}/>
      </button>
      <DocumentDropdownMenu name={props.name} activeDropdown={props.activeDropdown} type={props.type} />
    </div>
  );
}

export default DocumentItem;
