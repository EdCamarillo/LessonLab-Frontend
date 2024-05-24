import React, { useState } from 'react';
import '../styles/dashboard.css';
import icon from '../assets/icon.png';
import Lesson from '../assets/lesson.png';
import Quiz from '../assets/quiz.png';
import '../styles/addNewDocumentPopUpWindow.css';
import addNewDocument from '../assets/addNewDocument.png';


const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setSelectedOption(null); // Reset selected option when popup is toggled
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      {showPopup && <div className="overlay" onClick={togglePopup}></div>}
      <div id="dashboard-container" className={showPopup ? 'popup-open' : ''}>
        <div className={`dashboard ${showPopup ? 'opacity-low' : ''}`}>
          <div className='newDocument' onClick={togglePopup}>
            <img src={addNewDocument} alt="addNewDocument" className="addNewDocument" />
            <p>New Document</p>
          </div>
        </div>
        {showPopup && (
          <div className="popup-container">
            <div className="popup-content">
              <span className="popup-close" onClick={togglePopup}>X</span>
              <img src={icon} alt="icon" />
              <h2>You'd like to create a...</h2>
             
              <div className={`newLesson ${selectedOption === 'lesson' ? 'selected' : ''}`} onClick={() => handleOptionSelect('lesson')}>
                <img src={Lesson} alt="addLesson" className="addLesson" />
                <p>Lesson</p>
              </div>

              <div className={`newQuiz ${selectedOption === 'quiz' ? 'selected' : ''}`} onClick={() => handleOptionSelect('quiz')}>
                <img src={Quiz} alt="addQuiz" className="addQuiz" />
                <p>Quiz</p>
              </div>

              <div className='enterTitle'>
                <input placeholder='   Enter a title...'></input>
              </div>

              <button>Confirm</button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
