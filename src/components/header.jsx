import React, {useState} from 'react';
import icon from '../assets/icon.png';
import profileIcon from '../assets/profileIcon.png';
import '../styles/header.css';
import '../styles/addNewDocumentPopUpWindow.css';
import { Overlay } from './overlay.jsx';
import { Item } from './item.jsx'

const Header = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  // const handleBuyTokens = async () => {
  //   try {
  //     //NOTE: PASS ITEM PARAMETER WHEN WE MAKE MORE TOKEN VARIANTS
  //     const response = await createCheckoutSession();
      
  //     if (response && response.data) {
  //       console.log(response.data.data.id);
        
  //       console.log(response.data.data.attributes.checkout_url);

  //       window.open(response.data.data.attributes.checkout_url,'_blank');
  //     } else {
  //       console.error("Invalid response data:", response);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const closeShop = ()=>{
    setIsShopOpen(!isShopOpen)
  }

  //TENTATIVE ITEMS, SHOULD BE REAL ITEMS DATA
  const items = [
    { name: '5 Tokens', amount: 5000, currency:'PHP', description: 'Scammy Tokens used to generate lesson and quiz.' },
    { name: '50 Tokens', amount: 50000, currency:'PHP', description: 'Scammy Tokens used to generate lesson and quiz, but more.'},
    { name: '100 Tokens', amount: 100000, currency:'PHP', description: 'Scammy Tokens used to generate lesson and quiz, but more waste of money.' },
    { name: '500 Tokens', amount: 500000, currency:'PHP', description: 'Scammy waste of money.' },
    { name: '1000 Tokens', amount: 1000000, currency:'PHP', description: 'Who would buy this tho?.' },
    // Add more items as needed
  ];

  return (
    <div id="header-container" style={{ userSelect: 'none' }}>
      <div className="header-nav | font-black">
        <img src={icon} alt="icon" />
        <span className="name">LessonLab</span>
        <button className='buy-button' onClick={closeShop}>Buy Tokens</button>
        <Overlay isOpen={isShopOpen} onClose={closeShop} overlayName={"Token Shop"}>
          <div className='items'>
          {items.map((item, index) => (
            <Item key={index} item={item}/>
          ))}
          </div>
        </Overlay>
        <img src={profileIcon} alt="Profile" className="profile-button"/> 
      </div>
    </div>
  );
};

export default Header;
