import React from 'react';

function Line(props) {
  return (
    <svg className={"w-screen object-cover overflow-hidden"} viewBox="0 0 1937 814"
         fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_2004_51)">
        <path
          d="M1899 776C1684.24 587.739 1435.9 797.074 1314.95 636.911C1194.01 476.748 1183.89 79.1522 1068 42.6239C952.109 6.09565 959.467 197.167 869.791 223.861C780.114 250.554 754 156 651 181C578.221 198.665 535.5 42.6239 417.5 74C310.21 102.528 314.5 275 38.5 223.861"
          stroke="#FDEC19" strokeWidth="6" strokeLinecap="round"/>
      </g>
      <defs>
        <filter id="filter0_d_2004_51" x="0.499512" y="0.000869751" width="1936.5" height="813.999"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                         result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="17.5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 0.92549 0 0 0 0 0.0980392 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2004_51"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2004_51" result="shape"/>
        </filter>
      </defs>
    </svg>

  );
}

export default Line;