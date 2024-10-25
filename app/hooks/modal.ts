import React, {useContext} from "react";


export const ModalContext = React.createContext(null);

export const useMyModal = () => {
  const context = useContext(ModalContext);


  if (!context) {
    throw new Error('useModal должен использоваться внутри ModalProvider');
  }

  return context;
};