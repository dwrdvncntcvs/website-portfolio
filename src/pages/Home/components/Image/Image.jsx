import React, { useRef, useState } from "react";
import { useAuth } from "../../../../hooks/dataHooks";

import { useOutletContext } from "react-router-dom";
import "./image.scss";
import { ACCESS_VAR } from "../../../../utils/variables";

export default function Image({ src, alt }) {
  const { state } = useAuth();
  const [imageFile, setImageFile] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [show, setShow] = useState(false);

  const { access } = useOutletContext();

  const buttons = [
    {
      label: "Remove",
      action: () => {
        console.log("Remove");
      },
    },
  ];

  const previewButtons = [
    {
      label: "Upload",
      action: () => {
        console.log("Upload");
      },
    },
    {
      label: "Remove",
      action: () => {
        setImageFile({});
        setImageUrl("");
      },
    },
  ];

  const inputRef = useRef();

  return src === "" && access === ACCESS_VAR.PRIVATE ? (
    imageUrl !== "" ? (
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <img className="i__preview" src={imageUrl} alt="to-upload"></img>
        {show &&
          previewButtons.map(({ label, action }, i) => (
            <button key={i} onClick={action}>
              {label}
            </button>
          ))}
      </div>
    ) : (
      <>
        <button onClick={() => inputRef.current.click()}>Choose Image</button>
        <input
          ref={inputRef}
          hidden={true}
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];

            const fileReader = new FileReader();
            fileReader.addEventListener("load", (image) => {
              setImageUrl(image.target.result);
            });
            fileReader.readAsDataURL(file);

            setImageFile(file);
          }}
        />
      </>
    )
  ) : (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <img className="i__display" src={src} alt="" />
      {show &&
        buttons.map(({ label, action }, i) => (
          <button key={i} onClick={action}>
            {label}
          </button>
        ))}
    </div>
  );
}
