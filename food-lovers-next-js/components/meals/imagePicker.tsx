"use client";

import React, { ChangeEvent, useRef, useState } from "react";
import classes from "./imagePicker.module.css";
import Image from "next/image";

const ImagePicker = ({ name }: { name: string }) => {
  const imageInput = useRef(null);

  function handleButtonOnClick(evt: React.MouseEvent<HTMLElement>) {
    const imageCurrentInput = imageInput.current as any;
    imageCurrentInput.click();
    evt.preventDefault();
  }

  function handleOnFileChange(evt: ChangeEvent<HTMLInputElement>) {
    if (!evt.target.files) {
      setPickedImage(null);
      return;
    }
    const file = evt.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  }

  const [pickedImage, setPickedImage] = useState<string | null>(null);

  return (
    <>
      <div>
        <label htmlFor={name}>Image</label>
      </div>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image has been picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage as string}
              alt="The image that the user picked"
              fill
            />
          )}
        </div>
        <div className={classes.picker}>
          <input
            type="file"
            name={name}
            className={classes.input}
            accept="image/png, image/jpeg"
            ref={imageInput}
            onChange={handleOnFileChange}
            required
          />
          <button
            type="button"
            className={classes.button}
            onClick={handleButtonOnClick}
          >
            Select an image!
          </button>
        </div>
      </div>
    </>
  );
};

export default ImagePicker;
