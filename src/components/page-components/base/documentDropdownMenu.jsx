import React, { useState } from 'react';
import '../../../styles/sideBar.css'
import Download from '../../../assets/download.png'
import Import from '../../../assets/import.png'
import Rename from '../../../assets/rename.png'
import Delete from '../../../assets/delete.png'

const DocumentDropdownMenu = (props) => {
  return (
    <div>
      {props.activeDropdown === props.name && (
        <div className="dropdown-menu">
          <ul className='dropdown-item'>
            <li><button className='dropdown-menu-button'><img src={Download} alt="download" className="download" /> Download {props.type}</button></li>
            <li><button className='dropdown-menu-button'><img src={Import} alt="import" className="import" /> Import {props.type}</button></li>
            <li><button className='dropdown-menu-button'><img src={Rename} alt="rename" className="rename" /> Rename {props.type}</button></li>
            <li className="horizontal-line"></li>
            <li><button className='dropdown-menu-button'><img src={Delete} alt="delete" className="delete" /> Delete {props.type}</button></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default DocumentDropdownMenu