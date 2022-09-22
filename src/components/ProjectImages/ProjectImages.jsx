import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DOMPortal from "../helpers/DOMPortal";
import PreviewImages from "../PreviewImages/PreviewImages";
import "./projectImages.scss";

export default function ProjectImages({ data }) {
  const [preview, setPreview] = useState(false);
  const [image, setImage] = useState("");
  const [imageId, setImageId] = useState("");
  const { id } = useParams();

  return (
    <>
      <section className="projImg__images-container">
        <h1>project images.</h1>
        <div className="projImg__images">
          {data?.images?.map(
            (image, i) =>
              image.length > 0 && (
                <div
                  key={i}
                  onClick={() => {
                    setPreview(true);
                    setImage(image);
                    setImageId(i);
                  }}
                >
                  <img src={image} alt={`${id}-${i}`} />
                </div>
              )
          )}
        </div>
      </section>
      {preview && (
        <DOMPortal
          element={
            <PreviewImages
              images={data?.images}
              previewState={[preview, setPreview]}
              imageId={imageId}
              mainImage={image}
            />
          }
          elementId="preview-image-root"
        />
      )}
    </>
  );
}
