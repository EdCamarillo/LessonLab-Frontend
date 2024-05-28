import React from 'react'
import Download from '../assets/download.png'
import Import from '../assets/import.png'
import Rename from '../assets/rename.png'
import Delete from '../assets/delete.png'

const DocumentDropdownMenu = (props) => {
  return (
    <div>
      {props.activeDropdown === props.name && (
        <div className="dropdown-menu">
          <ul className='dropdown-item'>
            <li><img src={Download} alt="download" className="download" /> Download {props.type}</li>
            <li><img src={Import} alt="import" className="import" /> Import {props.type}</li>
            <li><img src={Rename} alt="rename" className="rename" /> Rename {props.type}</li>
            <li className="horizontal-line"></li>
            <li><img src={Delete} alt="delete" className="delete" /> Delete {props.type}</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default DocumentDropdownMenu