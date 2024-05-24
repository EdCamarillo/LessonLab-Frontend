import { Link, useNavigate } from 'react-router-dom'
import '../styles/sideBar.css';
import addButton from '../assets/addButton.png';
import '../styles/addNewDocumentPopUpWindow.css';

const SideBar = () => {
  return (
    <div id="sideBar-container">
      <div className="sideBar">
         <div className='docu'>
            <h1>My documents</h1>
            <img src={addButton} alt="addButton" className="addButton" />
         </div>
      </div>
    </div>
  )
}

export default SideBar
