import React from 'react';
import {useMyModal} from "../hooks/modal";
import clsx from "clsx";

function WrapperOpenModal({children, classes}: {children: React.ReactNode, classes?: string}) {
  const {openModal} = useMyModal()

  return (
    <div
      onClick={() => openModal()}
      className={clsx([classes ? classes : 'w-full h-full', 'cursor-pointer'])}>
      {children}
    </div>
  );
}

export default WrapperOpenModal;