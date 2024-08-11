"use client";

import React, { useRef } from "react";
import classes from "./imagePicker.module.css";

const ImagePicker = ({ name }: { name: string }) => {
  const imageInput = useRef(null);

  function handleOnClick(evt: React.MouseEvent<HTMLElement>) {
    const imageCurrentInput = imageInput.current as any;
    imageCurrentInput.click();
    evt.preventDefault();
  }

  return (
    <div className={classes.controls}>
      <div>
        <label htmlFor={name}>Image</label>
      </div>
      <div className={classes.picker}>
        <input
          type="file"
          name={name}
          className={classes.input}
          ref={imageInput}
        />
        <button
          type="button"
          className={classes.button}
          onClick={handleOnClick}
        >
          Select an image!
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
