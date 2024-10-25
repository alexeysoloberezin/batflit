import React from 'react';
import FormMain from "./FormMain";

function FormModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen ? (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 bg-dark w-screen h-screen bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-dark rounded-lg shadow-lg p-[40px] w-[480px] relative">
            <div className="custom-dash"></div>

            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
              onClick={onClose}
            >
              &#10005;
            </button>
            <FormMain aos={false}/>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default FormModal;
