import React from 'react';

function Line2(props) {
  return (
    <svg  className={"max-w-fit min-w-fit"} viewBox="0 0 2021 838" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_2005_52)">
        <path
          d="M47 185.642C219.121 88.8001 617.513 -52.7795 834.11 155.639C1104.86 416.163 669.526 527.673 834.11 706.19C998.693 884.706 1389.42 564.677 1549.61 731.692C1677.76 865.304 1885.26 738.359 1973 658.185"
          stroke="#FDEC19" strokeWidth="6"/>
      </g>
      <defs>
        <filter id="filter0_d_2005_52" x="0.528931" y="0.00146484" width="2019.49" height="837.995"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                         result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="22.5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 0.92549 0 0 0 0 0.0980392 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2005_52"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2005_52" result="shape"/>
        </filter>
      </defs>
    </svg>

  );
}

export default Line2;