import React, { useEffect } from "react";

const Modal = ({ value, removeModal, isModal }) => {
useEffect(()=>{
  setTimeout(() => {
    removeModal()
  }, 3000);
},[])
  return (
    <div>
      <p onClick={removeModal}>{value}</p>
    </div>
  );
};

export default Modal;
