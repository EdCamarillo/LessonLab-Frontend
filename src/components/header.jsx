import icon from '../assets/icon.png'
import profileIcon from '../assets/profileIcon.png';
import { Link, useNavigate } from 'react-router-dom'
import '../styles/header.css';
import '../styles/addNewDocumentPopUpWindow.css';
import createCheckoutSession from '../server/paymongoApi.js';


//TODO: IMPLEMENT NAVIGATION TO PAYMONGO CHECKOUT SESSION (preferably in token shop or billing info screen)
//TODO: POSSIBLE BILLING INFO SAVING
const Header = () => {
  const handleBuyTokens = async () => {
    try {
      //NOTE: PASS ITEM PARAMETER WHEN WE MAKE MORE TOKEN VARIANTS
      const response = await createCheckoutSession();
      
      if (response && response.data) {
        console.log(response.data.data.id);
        
        console.log(response.data.data.attributes.checkout_url);

        window.open(response.data.data.attributes.checkout_url,'_blank');
      } else {
        console.error("Invalid response data:", response);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div id="header-container">
     
      <div className="header-nav | font-black">
        <img src={icon} alt="icon" />
        <span className="name">LessonLab</span>

        {/* TODO: POSSIBLE TOKEN SHOP SCREEN AND BILLING INFO SCREEN FOR ONCLICK*/}
        <button className='buy-button' onClick={handleBuyTokens}>Buy Tokens</button>
        <img src={profileIcon} alt="Profile" className="profile-button"/> 
      </div>
    </div>
  )
}

export default Header
