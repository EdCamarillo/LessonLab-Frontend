import React from 'react'
import '../styles/sideBar.css'
import EllipsisBtn from '../assets/ellipsis_btn.png'
import DocumentDropdownMenu from './documentDropdownMenu';

const DocumentItem = (props) => {
  return (
    <button className='dummy'>{props.name} 
      <img 
        src={EllipsisBtn} 
        alt="EllipseBtn" 
        className="EllipseBtn" 
        onClick={() => props.toggleDropdown(props.name)} 
      />
      <DocumentDropdownMenu name={props.name} activeDropdown={props.activeDropdown} type={props.type} />
    </button>
  )
}

export default DocumentItem