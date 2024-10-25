import React from 'react';
import clsx from "clsx";

function Burger({active, onClick}) {
  const burgerClass = clsx(
    'burger ',
    {
      'active': active,
    }
  );

  return (
    <div className={'burger-btn'} onClick={onClick}>
      <div className={burgerClass} >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

  );
}

export default Burger;