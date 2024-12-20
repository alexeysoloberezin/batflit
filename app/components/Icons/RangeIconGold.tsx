import React from 'react';

function RangeIconGold({props, state}) {
  return (
    <div {...props} className="custom-thumb outline-none translate-y-[-11px] translate-x-[4px] cursor-grab">
      {/* Кастомная иконка */}
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="11" fill="white"/>
        <circle cx="15" cy="15" r="11" stroke="url(#paint0_linear_23_355)" strokeWidth="8"/>
        <circle cx="15" cy="15" r="11" stroke="url(#paint1_linear_23_355)" strokeWidth="8"/>
        <defs>
          <linearGradient id="paint0_linear_23_355" x1="5.5" y1="-12" x2="22.5" y2="40" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stopColor="#FFAE35"/>
          </linearGradient>
          <linearGradient id="paint1_linear_23_355" x1="4" y1="-7.5" x2="24" y2="41.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFED8F"/>
            <stop offset="0.473958" stopColor="#FFDB66"/>
            <stop offset="1" stopColor="#FFC738"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default RangeIconGold;