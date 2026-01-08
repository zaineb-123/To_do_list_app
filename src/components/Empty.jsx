import React from "react";
import vide from '../assets/vide.png'
const Empty = () => {
  return (
    <div>
        
        
      <div>
        <div className='empty'>
        <div className='image-vide'>
        <img src={vide} alt="Empty" />
        <p class="text-vide">Oops...it's empty !</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Empty;