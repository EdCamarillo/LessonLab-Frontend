import icon from '../assets/icon.png';
import profileIcon from '../assets/profileIcon.png';
import { Link, useNavigate } from 'react-router-dom';
import AddPage from '../assets/addPage.png'
import Up from '../assets/up.png'
import Down from '../assets/down.png'
import Icon from '../assets/icon.png'
import ImportFill from '../assets/importFill.png'
import ExportFill from '../assets/exportFill.png'
import '../styles/lesson.css';

const LessonComponent = () => {
  return (
    <div id="lesson-container">
      {/* <h1>Lesson</h1> */}
      <div className='top'>
         <h2>Design Patterns Info</h2>
            <h3 id='addPage'>
                <img src={AddPage} alt="addPage"  />
                Add Page
            </h3>
            <h3 id='askLeLa'>
                <img src={Icon} alt="askLeLa"  />
                Ask Lela
            </h3>
            <div className='Btns'>
            <img src={Up} alt="UpBtn" className='UpBtn' />
            <img src={Down} alt="DownBtn" className='DownBtn' />
            </div>
      </div>
      <div className='lesson-docu'>
      </div>
            <div className='Btns2'>
            <img src={ExportFill} alt="exportFill" className='exportFill' />
            <img src={ImportFill} alt="importFill" className='importFill' />
            </div>
    </div>
  );
};

export default LessonComponent;
