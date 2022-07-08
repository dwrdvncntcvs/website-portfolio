import React from "react";
import { HiX } from "react-icons/hi";
import "./previewImages.scss";

export default function PreviewImages({
  images,
  mainImage,
  previewState,
  imageId,
}) {
  const [preview, setPreview] = previewState;

  const rearrangeImage = () => {
    const imagesArr = images.filter((image) => image !== mainImage);
    imagesArr.unshift(mainImage);
    return imagesArr;
  };

  const newImages = rearrangeImage();

  const closeAction = () => {
    setPreview(!preview);
  };

  return (
    <div className="pi__main-container">
      <div className="pi__image-prev">
        <button onClick={closeAction}>
          <HiX />
        </button>
        <img src={mainImage} alt="" />
      </div>
      {/* <button id="pi__left"></button>
      <button id="pi__right"></button> */}
    </div>
  );
}
