import React from "react";
import "./floatingImage.scss";

export default function FloatingImage({ src, alt }) {
  return <img id="fi__floating-icon" src={src} alt={alt} />;
}
