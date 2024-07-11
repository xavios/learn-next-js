import React from "react";
import classes from "./Modal.module.css";
import { Link } from "react-router-dom";

const Modal = ({ children }) => {
  return (
    <>
      <Link to="/">
        <div className={classes.backdrop} />
      </Link>
      <dialog className={classes.modal} open={true}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
