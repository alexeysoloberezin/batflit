import React from 'react';
import Header from "./index";

function HeaderSecond(props) {
  return (
    <div className="bg-dark h-[100px] rounded-bl-[30px] rounded-br-[30px] flex items-center">
      <Header isSecond={true}/>
    </div>
  );
}

export default HeaderSecond;