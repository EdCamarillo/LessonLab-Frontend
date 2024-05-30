import React, { useState } from 'react';
import '../styles/item.css';
import icon from '../assets/icon.png';
import createCheckoutSession from '../server/paymongoApi.js';

export function Item ({item}){

  const formattedAmount = (item.amount / 100).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  // const handleBuyTokens = async (item) => {
  //   try {
  //     //NOTE: PASS ITEM PARAMETER WHEN WE MAKE MORE TOKEN VARIANTS
  //     const response = await createCheckoutSession(item);
      
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

  const handleBuyTokens = async () => {
    try {
      const response = await createCheckoutSession(item);
      if (response && response.data) {
        window.open(response.data.data.attributes.checkout_url, '_blank');
      } else {
        console.error("Invalid response data:", response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="item">
      <img src={icon} alt="item Image" className="item-image" />
      <div className="item-content">
        <h2 className="item-title">{item.name}</h2>
        <button className="item-button" onClick={handleBuyTokens}>BUY {formattedAmount}{item.currency}</button>
      </div>
    </div>
  );
};
