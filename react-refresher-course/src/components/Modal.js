import React, { useEffect, useState } from "react";
import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const Modal = ({ children }) => {
  const navigate = useNavigate();
  const [navigateToLocation, setNavigateToLocation] = useState("");
  useEffect(() => {
    if (navigateToLocation !== "") {
      navigate(navigateToLocation);
    }
  }, [navigateToLocation, navigate]);

  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => {
          setNavigateToLocation("..");
        }}
      />
      <dialog className={classes.modal} open={true}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
