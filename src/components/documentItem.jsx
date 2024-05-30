import React, { useRef, useEffect } from 'react';
import '../styles/sideBar.css';
import { ImportContactsOutlined, ArticleOutlined, MoreHoriz } from '@mui/icons-material';
import DocumentDropdownMenu from './documentDropdownMenu';

const DocumentItem = (props) => {
  const dropdownRef = useRef(null);

  const getIcon = () => {
    if (props.type === 'Lesson') {
      return <ImportContactsOutlined className="lesson-icon" />;
    } else if (props.type === 'Quiz') {
      return <ArticleOutlined className="quiz-icon" />;
    }
    return null;
  };

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

  return (
    <div className='document-item' ref={dropdownRef}>
      <button className='dummy'>
        {getIcon()}
        <span>{props.name}</span>
        <MoreHoriz className="more-icon" onClick={handleClick}/>
      </button>
      <DocumentDropdownMenu name={props.name} activeDropdown={props.activeDropdown} type={props.type} />
    </div>
  );
}

export default DocumentItem;
