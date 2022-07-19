import React, { useState } from "react";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./previewImages.scss";

export default function PreviewImages({
  images,
  mainImage,
  previewState,
  imageId,
}) {
  const [preview, setPreview] = previewState;
  const [imgId, setImgId] = useState(0);

  const rearrangeImage = () => {
    const imagesArr = images.filter((image) => image !== mainImage);
    imagesArr.unshift(mainImage);
    return imagesArr;
  };

  const newImages = rearrangeImage();

  const closeAction = () => {
    setPreview(!preview);
  };

  const viewImage = (direction) => {
    if (direction === "right") {
      if (imgId === newImages.length - 1) return;

      return setImgId(imgId + 1);
    }

    if (direction === "left") {
      if (imgId === newImages.length - newImages.length) return;

      return setImgId(imgId - 1);
    }
  };

  return (
    <div className="pi__main-container">
      <div className="pi__image-prev">
        <button onClick={closeAction}>
          <HiX />
        </button>
        <button
          id="pi__left"
          className={
            imgId === newImages.length - newImages.length
              ? "pi__btn-disable"
              : ""
          }
          onClick={() => viewImage("left")}
        >
          <HiChevronLeft />
        </button>
        <img src={newImages[imgId]} alt="" />
        <button
          id="pi__right"
          className={imgId === newImages.length - 1 ? "pi__btn-disable" : ""}
          onClick={() => viewImage("right")}
        >
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}
