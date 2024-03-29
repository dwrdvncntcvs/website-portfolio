import React, { useState } from "react";
import { useEffect } from "react";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { arrangeImages } from "../../utils/helper";
import "./previewImages.scss";

export default function PreviewImages({ images, mainImage, previewState }) {
  const [preview, setPreview] = previewState;
  const [imgId, setImgId] = useState(0);

  const newImages = arrangeImages(images, mainImage);

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

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setPreview(false);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") return viewImage("right");

      if (e.key === "ArrowLeft") return viewImage("left");
    });
  }, [imgId]);

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
