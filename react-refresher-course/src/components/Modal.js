import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ children, closeModal }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={closeModal} />
      <dialog className={classes.modal} open={true}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
