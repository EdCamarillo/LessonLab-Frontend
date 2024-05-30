import React from 'react';
import '../styles/sideBar.css';
import { ImportContactsOutlined, ArticleOutlined, MoreHoriz } from '@mui/icons-material';
import DocumentDropdownMenu from './documentDropdownMenu';

const DocumentItem = (props) => {
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
    <div className='document-item'>
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
