import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  fullScreen?: boolean; // Added the fullScreen prop
}

const Modal: React.FC<ModalProps> = ({ onClose, children, fullScreen }) => {
  const modalStyle = fullScreen
    ? 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'
    : 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 max-w-5xl bg-white rounded-lg';  // Make modal wider

  return ReactDOM.createPortal(
    <div className={modalStyle} onClick={onClose}>
      <div className="w-full h-full bg-white overflow-auto p-6" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
