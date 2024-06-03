import React, { useEffect } from 'react';
import '../../../styles/overlay.css';

export function Overlay({isOpen, onClose, children, overlayName}){
    useEffect(() => {
        const handleEscapeKey = (event) => {
          if (event.key === 'Escape') {
            onClose();
          }
        };
    
        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKey);
          }
      
          return () => {
            document.removeEventListener('keydown', handleEscapeKey);
          };
        }, [isOpen, onClose]);

    return(
        <>
        {isOpen?(
            <div className='overlay'>
                <div className={`overlay_background ${isOpen ? '' : 'hidden'}`} onClick={onClose}/>
                <div className={`overlay_container ${isOpen ? '' : 'hidden'}`}>
                    <div className='overlay_controls'>
                        <h1 className='overlayName'>{overlayName}</h1>
                        <button
                            className='overlay_close'
                            type="button"
                            onClick={onClose}
                        />
                    </div>
                    {children}
                </div>
            </div>
        ): null}
        </>
    );
}